import bcrypt from "bcrypt";
import User from "../models/user.model.js";
import mongoose from "mongoose";

export const getProfile = async (req, res) => {
  try {
    const { userid } = req.params;
    const { userId } = req.user._id.toString;

    let user = await User.findById(userid).select("-password");
    if (!user) {
      return res.status(400).json({ error: "user profile not found" });
    }
    if (userId === user._id.toString()) {
      const authUser = user;
      res.status(200).json({ success: true, data: authUser });
    } else {
      return res.status(200).json({ success: true, data: user });
    }
  } catch (error) {
    console.log(`error in getProfile endpoint: ${error}`);
    res.status(500).json({ error: "internal server error" + error.message });
  }
};

export const updateProfile = async (req, res) => {
  const userId = req.user._id;
  const { userid } = req.params;
  const { updatedInputs } = req.body;
  const {
    coverImg,
    profileImg,
    profilename,
    userName,
    Bio,
    gender,
    email,
    location,
    currentPassword,
    newPassword,
  } = updatedInputs;

  try {
    const user = await User.findById(userid);
    if (!user) {
      return res.status(404).json({ error: "user not found" });
    }

    if (userId.toString() !== user._id.toString()) {
      return res
        .status(401)
        .json({ error: "unauthorised access to edit profile" });
    }

    if (
      (!newPassword && currentPassword) ||
      (!currentPassword && newPassword)
    ) {
      return res.status(400).json({
        error: "Please provide both current password and new password",
      });
    }

    if (currentPassword && newPassword) {
      const isMatch = await bcrypt.compare(currentPassword, user.password);
      if (!isMatch)
        return res.status(400).json({ error: "Current password is incorrect" });
      if (newPassword.length < 6) {
        return res
          .status(400)
          .json({ error: "Password must be at least 6 characters" });
      }
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(newPassword, salt);
    }

    (user.profilename = profilename || user.profilename),
      (user.username = userName || user.username),
      (user.gender = gender || user.gender),
      (user.email = email || user.email),
      (user.Bio = Bio || user.Bio),
      (user.location = location || user.location),
      (user.coverimage = coverImg || user.coverimage),
      (user.profileimage = profileImg || user.profileimage);

    const updatedProfile = await user.save();
    user.password = null;
    res.status(200).json({ success: true, updatedProfile });
  } catch (error) {
    console.log(`error in  updateProfile endpoint: ${error}`);
    res.status(500).json({ error: "internal server error " + error.message });
  }
};

export const deleteProfile = async (req, res) => {
  try {
    const userId = req.user._id;
    const { userid } = req.params;
    const { password } = req.body;

    const user = await User.findById(userid);
    if (!user) {
      return res.status(404).json({ error: "user not found" });
    }

    if (userId.toString() !== user._id.toString()) {
      return res
        .status(401)
        .json({ error: "unauthorised access to delete account" });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "password characters must not be less than 6" });
    }

    const validUser = await bcrypt.compare(password, user.password);
    if (!validUser) {
      return res.status(401).json({ error: "Aborted, password is incorrect" });
    }
    await User.findByIdAndDelete({ _id: user._id });
    res
      .status(200)
      .json({ success: true, message: "profile deleted succesfully" });
  } catch (error) {
    console.log(`error in  deleteProfile endpoint: ${error}`);
    res.status(500).json({ error: "internal server error " + error.message });
  }
};

export const followOrUnfollowUser = async (req, res) => {
  const userId = req.user._id;
  const { userid } = req.params;

  try {
    const userTofollow = await User.findById(userid);
    const currentUser = await User.findById(userId);

    if (userid === userId.toString()) {
      res.status(400).json({ error: "Not Allowed" });
    }
    if (!userTofollow || !currentUser) {
      res.status(404).json({ error: "User Not Found" });
    }

    const followUser = userTofollow.followers.includes(userId);
    if (followUser) {
      // unfollow user
      await User.findByIdAndUpdate(userid, { $pull: { followers: userId } });
      await User.findByIdAndUpdate(userId, { $pull: { followings: userid } });

      res
        .status(200)
        .json({ msg: "user unfollowed successfully", data: "Follow" });
    } else {
      // follow user
      await User.findByIdAndUpdate(userId, { $push: { followings: userid } });
      await User.findByIdAndUpdate(userid, { $push: { followers: userId } });

      res.status(200).json({
        msg: "user followed successfully",
        data: "Following",
      });
    }
  } catch (error) {
    console.error({ "server Error": error.message });
    res.status(500).json({ error: error.message });
  }
};
