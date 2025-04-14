import mongoose from "mongoose"

const DB_URL = process.env.DB_URL

const dbConnect = async () => {
    try {
        await mongoose.connect(DB_URL)
        console.log(`[database]: Connected to the database`);
    } catch (error) {
        console.warn(`[database error]: ${error}`);
    }
}

export { dbConnect, mongoose }