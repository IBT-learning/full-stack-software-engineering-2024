import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(400).json({ error: "No token provided" });
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET);
    if (!payload) {
      return res.status(401).json({ error: "authorization failed" });
    }

    const user = await User.findById(payload.userId).select("-password");
    if (!user) {
      return res.status(404).json({ error: "user not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log("Error in protectRoute endpoint", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
