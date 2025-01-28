import mongoose from "mongoose";

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log(`[database connection]: successfull`);
};

export { mongoose, connectDB };
