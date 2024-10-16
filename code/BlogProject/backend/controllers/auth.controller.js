import bcrypt from "bcrypt";

import User from "../models/user.model.js";
import { generateTokenAndCookie } from "../middlewares/generateToken.js";

export const createAccount = async (req, res) => {
  try {
    const { profilename, username, email, password } = req.body;

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: "username already exist" });
    }
    const emailRegex =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    const validEmail = emailRegex.test(email);
    if (!validEmail) {
      return res.status(400).json({ error: "please provide a valid email" });
    }

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      res.status(400).json({ msg: "email has already been used" });
    }

    if (password.length < 6 || password.length > 15) {
      res.status(400).json({
        msg: "password length must not be less than 6 and not more than 15 characters",
      });
    }
    const saltRounds = 10;
    const hashPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
      profilename,
      username,
      email,
      password: hashPassword,
    });
    if (newUser) {
      generateTokenAndCookie(newUser._id, res);

      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        profilename: newUser.profilename,
        username: newUser.username,
        email: newUser.email,
        gender: newUser.gender,
        location: newUser.location,
        coverimage: newUser.coverimage,
        profileimage: newUser.profileimage,
        Bio: newUser.Bio,
        followings: newUser.followings,
        followers: newUser.followers,
      });
      console.log(`${newUser.profilename} account created succesfully`);
    } else {
      res.status(404).json({ error: "user not found" });
    }
  } catch (error) {
    console.log(`error in signup controller: ${error}`);
    res.status(500).json({ "server error": error.message });
  }
};

export const userLogin = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const user = await User.findOne({ username });

    const existingEmail = await User.findOne({ email });

    const correctPassword = await bcrypt.compare(password, user.password);

    if (!user || !existingEmail || !correctPassword) {
      return res
        .status(400)
        .json({ msg: "bad credentials! Pls provide valid inputs" });
    } else {
      generateTokenAndCookie(user._id, res);
      res.status(200).json({
        _id: user._id,
        profilename: user.profilename,
        username: user.username,
        email: user.email,
        gender: user.gender,
        location: user.location,
        coverimage: user.coverimage,
        profileimage: user.profileimage,
        Bio: user.Bio,
        followings: user.followings,
        followers: user.followers,
      });
    }
  } catch (error) {
    console.log(`error in login controller: ${error}`);
    res.status(500).json({ "server error": error.message });
  }
};

export const userLogOut = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ msg: "user logged out succesfully" });
  } catch (error) {
    console.log(`error in logout controller: ${error}`);
    res.status(500).json({ "server error": error.message });
  }
};
