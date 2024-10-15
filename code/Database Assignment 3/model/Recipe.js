import mongoose from "mongoose";

const Recipe = new mongoose.Schema({
        title: {
            type: String,
            required: true,
            maxlength: 100,
            trim:true,
        },
        author: {
            type: String,
            required: true,
            default: "Author Unknown",
            maxlength: 150,
        },
        instructions: {
            type: String,
            required: true,
            maxlength: 1000, 
        },
        ingredients: {
            type: [String], 
            required: true,
            default: [], 
        },
        createdBy: {
            type:mongoose.Schema.ObjectId,
            required: true,
            ref: "user",
        }
    })

export default mongoose.model("recipe", Recipe, "Recipes")