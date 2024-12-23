import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import { JWT_SECRET } from "../constants/constants.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    console.log(token);

    if (!token) {
      res
        .status(400)
        .json({ error: "unauthorised access! pls verify your account" });
    }
    const decoded = jwt.verify(token, JWT_SECRET);

    if (!decoded) {
      res
        .status(400)
        .json({ error: "unathorised access! Verification failed" });
    }

    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      res.status(400).json({ error: "user not authenticated" });
    } else {
      req.user = user;
      next();
    }
  } catch (error) {
    console.log(`error in protectRoute middleware: ${error}`);
    res.status(500).json({ "server error": error.message });
  }
};

export default protectRoute;
