import bcrypt from "bcrypt";

import { generateTokenandSetCookies } from "../middlewares/generateToken.js";
import User from "../models/user.model.js";

export const createAccount = async (req, res) => {
  try {
    const { fullname, username, email, gender, password } = req.body;

    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res.status(400).json({ message: "user already exists" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "please provide a valid email" });
    }

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: "Email already used" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ error: "password must not be less than 6 character" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullname,
      username,
      email,
      gender,
      password: hashedPassword,
    });
    if (newUser) {
      generateTokenandSetCookies(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullname,
        username: newUser.username,
        email: newUser.email,
        gender: newUser.gender,
      });
    } else {
      return res.status(400).json({ error: "invalid user data" });
    }
  } catch (error) {
    console.log(`server Error, ${error.message}`);
    res.status(500).json({ "createAccount endpoint Error": "server error" });
  }
};

export const loginToAccount = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "email does not exists" });
    }

    const isPassword = await bcrypt.compare(password, user.password);

    if (!isPassword) {
      return res.status(404).json({
        message:
          "password is incorrect, please try again or recover your password",
      });
    } else {
      generateTokenandSetCookies(user._id, res);

      console.log(`${user.fullname} login succesfully`);
      return res.status(200).json({
        fullname: user.fullname,
        username: user.username,
        email: user.email,
        gender: user.gender,
      });
    }
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const logOut = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
