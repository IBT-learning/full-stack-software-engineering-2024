import "dotenv/config" 
import mongoose from "mongoose";

const DB_URL = process.env.DB_URL

const blogDB = async()=>{
try{
    await mongoose.connect(DB_URL)
    console.log("Connected to database:", mongoose.connection.name);
}catch(err){
    console.warn(`[database error] - ${err.message}`);
}
}

export {blogDB, mongoose}