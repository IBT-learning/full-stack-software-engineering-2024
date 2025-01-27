import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import User from "../models/User.js";

dotenv.config();
const JWT_KEY = process.env.JWT_KEY;

const tokenValidator = async (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
      console.error("Authorization header is missing");
      return res.status(401).send({ error: "Please authenticate." });
    }

    if (!authHeader.startsWith("Bearer ")) {
      console.error("Authorization header is malformed:", authHeader);
      return res.status(401).send({ error: "Please authenticate." });
    }

    const token = authHeader.replace("Bearer ", "");
    console.log("Token:", token);

    const decoded = jwt.verify(token, JWT_KEY);
    console.log("Decoded token:", decoded);

    const user = await User.findById(decoded.userid);
    if (!user) {
      console.error("User not found for token:", decoded);
      return res.status(401).send({ error: "Please authenticate." });
    }

    req.user = user;
    next();
  } catch (err) {
    console.error("Error in token validation:", err);
    res.status(401).send({ error: "Please authenticate." });
  }
};

export default tokenValidator;
