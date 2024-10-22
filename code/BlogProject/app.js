import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";
import cors from "cors";

import { connectDB } from "./db.js";

import authRoute from "./backend/routes/auth.route.js";
import postRoute from "./backend/routes/post.route.js";
import userRoute from "./backend/routes/user.route.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT;

app.use(express.static(path.join(import.meta.dirname, "./frontend/public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cors());
app.use("/api/user/auth", authRoute);
app.use("/api/post", postRoute);
app.use("/api/user", userRoute);

app.listen(PORT, () => {
  console.log(`[server connection]: successfull on ${PORT}`);
  connectDB();
});
