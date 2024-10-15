import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import { connectDB } from "./db.js";
import userRoute from "./backend/routes/user.route.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use("/api/user/auth", userRoute);

app.listen(PORT, () => {
  console.log(`[server connection]: successfull on ${PORT}`);
  connectDB();
});
