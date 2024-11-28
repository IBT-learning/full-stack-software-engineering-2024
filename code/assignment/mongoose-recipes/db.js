import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/recipes")
         console.log("Database: Successfully connected")
     }catch(error){
         console.warn(`database error: ${error}`)
     }
     
}

export { dbConnect, mongoose }
