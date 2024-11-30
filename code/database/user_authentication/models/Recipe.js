import mongoose from "mongoose";

const RecipeSchema = new mongoose.Schema({
    title: String,
    author: String,
    instructions: String,
    ingredients: [{type: String, maxlength: 150}],
    createdBy: mongoose.Schema.ObjectId
},
{timestamps: true}
)

export default mongoose.model("Recipe", RecipeSchema, "recipe");//if "recipe" not specified, Mongoose pluralizes the model name (Recipe → recipes). If the recipes collection doesn’t exist, MongoDB creates it automatically when data is inserted.
 
