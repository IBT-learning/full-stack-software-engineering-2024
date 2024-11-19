import express from "express";
const router = express.Router();
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/User.js";

const SALT = Number(process.env.SALT);
const JWT_KEY = process.env.JWT_KEY;

router.post("/register", async (req, res) => {
  try {
    const { username, email, country, city, password } = req.body;
    const newUser = new User({
      username,
      email,
      country,
      city,
      password: bcrypt.hashSync(password, SALT),
    });
    await newUser.save();
    res.send(`new user ${req.body.username} created`);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.post("/login", async (req, res) => {
  console.log("request received:", req.body);
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    console.log("user found:", user);

    if (!user) {
      res.send("unknown username");
    }

      const verified = await bcrypt.compare(password, user.password);
      console.log("password verified", verified)

    if (!verified) {
      res.send("incorrect password");
    } else {
      const token = jwt.sign({ userId: user._id }, process.env.JWT_KEY, {
        expiresIn: 60 * 60 * 24,
      });

      return res.json({ message: `user verified`, token, user });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

export default router;
