import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/recipes");
    console.log(`database connection: successfull`);
  } catch (error) {
    console.error(`Error in fetching database: ${error}`);
  }
};

export { mongoose, connectDB };
