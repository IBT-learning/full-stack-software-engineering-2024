import mongoose from "mongoose"
const DB_URL = process.env.DB_URL
const dbConnect = async () => {
    try{
        await mongoose.connect(DB_URL)
        console.log(`[database]: connected to db`)
    } catch (err){
        console.warn(`[database error]: ${err}`)
    }
    
}

export { dbConnect, mongoose }