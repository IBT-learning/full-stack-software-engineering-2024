import { mongoose } from "../db.js";

const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    author: {
        type: String,
        required: true,
        trim: true,
    },
    instructions: {
        type: String,
        required: true,
        trim: true,
    },
    ingredients: {
        type: [String],
        required: true,
        trim: true,
    }, 
},
{ timestamps: true }
)

export default mongoose.model("recipe", recipeSchema)
// recipe represents the name of the model in my default
// model export and it can be named anything on import
// it all represents my db collection which is pluralized
// by default