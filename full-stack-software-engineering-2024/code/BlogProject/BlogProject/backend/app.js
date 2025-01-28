import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import { connectDB } from "./db.js";
import { PORT } from "./constants/constants.js";

import authRoute from "./routes/auth.route.js";
import postRoute from "./routes/post.route.js";
import userRoute from "./routes/user.route.js";

const app = express();

app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: "true",
  })
);

app.use("/api/user/auth", authRoute);
app.use("/api/post", postRoute);
app.use("/api/user", userRoute);

app.listen(PORT, () => {
  console.log(`[server connection]: successful on ${PORT}`);
  connectDB();
});
