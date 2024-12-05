import mongoose from "mongoose"

const dbConnect = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/Recipe_Auth_DB")
        console.log(`[database]: Connected to the database`);
    } catch (error) {
        console.warn(`[database error]: ${error}`);
    }
}

export { dbConnect, mongoose }