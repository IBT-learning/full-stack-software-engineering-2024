import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoURI=process.env.MONGO_URI;
const dbConnect = async () => {
  try {
    await mongoose.connect(mongoURI)
    console.log(`[database]: connected to db`)
  } catch (err) {
    console.warn(`[database error]: ${err}`)
 }
}



export default dbConnect;
