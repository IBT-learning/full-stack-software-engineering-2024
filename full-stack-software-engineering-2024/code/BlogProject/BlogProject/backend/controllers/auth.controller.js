import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import { generateTokenAndCookie } from "../middlewares/generateToken.js";
import { JWT_SECRET } from "../constants/constants.js";

export const createAccount = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ error: "fields cannot be empty" });
    }

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
      res.status(402).json({ error: "email has already been used" });
    }

    if (password.length < 6 || password.length > 15) {
      res.status(400).json({
        error: "password length should not be less than 6 characters",
      });
    }
    const saltRounds = 10;
    const hashPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
      profilename: "",
      username,
      email,
      password: hashPassword,
    });
    // generateTokenAndCookie(newUser._id, res);
    const token = jwt.sign({ newUser }, JWT_SECRET, { expiresIn: "14d" });
    await newUser.save();
    res.status(201).json({
      success: "true",
      msg: "Your Account has been created",
      data: { newUser, token },
    });
    console.log(`${newUser.username} account created succesfully`);
  } catch (error) {
    console.log(`error in signup controller: ${error}`);
    res.status(500).json({ "server error": error.message });
  }
};

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ msg: "Incorrect Email" });
    }

    const correctPassword = await bcrypt.compare(password, user.password);
    if (!correctPassword) {
      return res.status(404).json({ msg: "Incorrect Password" });
    }
    // generateTokenAndCookie(user._id, res);
    const token = jwt.sign({ user }, JWT_SECRET, { expiresIn: "14d" });
    res.status(200).json({
      success: "true",
      msg: "Login successfully",
      data: { user, token },
    });
    console.log(`${user.username} login successful`);
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
