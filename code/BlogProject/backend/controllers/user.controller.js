import bcrypt from "bcrypt";
import User from "../models/user.model.js";

export const getProfile = async (req, res) => {
  try {
    const { username } = req.params;

    const user = await User.findOne({ username }).select("-password");
    if (!user) {
      return res.status(400).json({ error: "user profile not found" });
    }
    return res.status(200).json({ success: true, data: user });
  } catch (error) {
    console.log(`error in getProfile endpoint: ${error}`);
    res.status(500).json({ error: "internal server error" + error.message });
  }
};

export const updateProfile = async (req, res) => {
  const userId = req.user._id;
  const { username } = req.params;
  const {
    displayName,
    userName,
    Bio,
    gender,
    email,
    location,
    currentPassword,
    newPassword,
  } = req.body;
  let { coverImg, profileImg } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ error: "profile not found" });
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
          .json({ error: "Password must be at least 6 characters long" });
      }
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(newPassword, salt);
    }

    if (profileImg) {
      if (user.profileimage) {
        await cloudinary.uploader.destroy(
          user.profileimage.split("/").pop().split(".")[0]
        );
      }

      const uploadedResponse = await cloudinary.uploader.upload(profileImg);
      profileImg = uploadedResponse.secure_url;
    }

    if (coverImg) {
      if (user.coverimage) {
        await cloudinary.uploader.destroy(
          user.coverimage.split("/").pop().split(".")[0]
        );
      }

      const uploadedResponse = await cloudinary.uploader.upload(coverImg);
      coverImg = uploadedResponse.secure_url;
    }

    (user.displayname = displayName || user.displayname),
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
    const { username } = req.params;
    const { password } = req.body;

    const user = await User.findOne({ username });
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
