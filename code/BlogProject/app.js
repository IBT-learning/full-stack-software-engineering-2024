import express from "express";
import dotenv from "dotenv";

import { connectDB } from "./db.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`[server connection]: successfull on ${PORT}`);
  connectDB();
});
