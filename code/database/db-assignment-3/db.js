import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`[database]: connected succesfully`);
  } catch (error) {
    console.error(`server error: ${error}`);
  }
};

export { mongoose, connectToDB };
