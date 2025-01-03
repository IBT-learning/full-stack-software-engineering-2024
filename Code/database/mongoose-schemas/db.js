import mongoose from "mongoose";

const dbConnect = async () => {
  try{
    await mongoose.connect("mongodb://localhost:27017/Recipe")
    console.log(`Database: MongoDB Connected`);
    
  } catch(err) {
    console.warn(`[database error] : ${err} `)
  }
} 

export { dbConnect, mongoose } 