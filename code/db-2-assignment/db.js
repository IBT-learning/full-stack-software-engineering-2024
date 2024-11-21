import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/Recipe_DB")
        console.log(`[database]: connected to the database`);
    } catch (error) {
        console.warn(`[db error]: ${error}`);
    }
}

export { dbConnect, mongoose }

