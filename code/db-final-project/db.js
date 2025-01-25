import mongoose from "mongoose";

const DB_URL = process.env.DB_URL

const dbConnect = async () => {
    try {
        await mongoose.connect(DB_URL)
        console.log(`[database]: Connected to the database`);
    } catch (err) {
        console.error(`[database error]: Failed to connect to the database: ${err}`);
    }
}

export { dbConnect, mongoose }