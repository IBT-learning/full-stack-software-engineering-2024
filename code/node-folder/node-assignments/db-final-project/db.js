import mongoose from "mongoose";

const dbConnect =  async() => {
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log('database connected');
        
    } catch (error) {
        console.warn(`[database erorr] : ${error}`)
    }
}

export {dbConnect, mongoose}