import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../constants/constants.js";

export const generateTokenAndCookie = (userId, res) => {
  const token = jwt.sign({ userId }, JWT_SECRET, { expiresIn: "14d" });

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    sameSite: "None",
    httpOnly: true,
    secure: true,
  });
};
