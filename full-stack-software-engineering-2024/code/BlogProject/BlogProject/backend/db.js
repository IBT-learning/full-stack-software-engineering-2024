import mongoose from "mongoose";
import { MONGO_URI } from "./constants/constants.js";

const connectDB = async () => {
  await mongoose.connect(MONGO_URI);
  console.log(`[database connection]: successful`);
};

export { mongoose, connectDB };
