import mongoose from "mongoose"
import User from "./models/User-model.js"

const recipeDb = async() => {
    try{
        await mongoose.connect("mongodb://localhost:27017/recipe")
        console.log("Database Name:", mongoose.connection.name);
        console.log(`Connected to database`);
    }
    catch(err){
        console.warn(`Error`);
    }
}

export {recipeDb, mongoose}