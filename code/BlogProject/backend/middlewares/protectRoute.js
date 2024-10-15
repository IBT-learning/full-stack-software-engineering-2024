import jwt from "jsonwebtoken"
import User from "../models/user.model";

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
  
  if (!token) {
    res.status(400).json({error: "unauthorised access! pls verify your account"})
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET)

  if (!decoded) {
    res.status(400).json({error: "unathorised access! Verification failed"})
  }

  const user = await User.findById(decoded.userId).select("-password")
  if (!user) {
    res.status(404).json({error: "user not found"})
  } else {
    req.user = user
    next()
  }
  } catch (error) {
    console.log(`error in protectRoute middleware: ${error}`);
    res.status(500).json({ "server error": error.message });
  }
};

