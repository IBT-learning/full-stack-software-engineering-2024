import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/recipes");
    console.log(`[database]: connected succesfully`);
  } catch (error) {
    console.error(`server error: ${error}`);
  }
};

export { mongoose, connectToDB };
