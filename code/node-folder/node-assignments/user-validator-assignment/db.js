import mongoose from "mongoose";
const dbConnect =  async() => {
    try {
        await mongoose.connect('mongodb://localhost:27017/recipes')
        console.log("Connected to DB successfully");
    } catch (error) {
        console.log("Error connecting to DB");
    }
}
export { dbConnect, mongoose }