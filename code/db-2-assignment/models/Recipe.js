import { mongoose } from "../db.js";

const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        trim: true,
    },
    author: {
        type: String,
        require: true,
        trim: true,
    },
    instructions: {
        type: String,
        require: true,
        trim: true,
    },
    ingredients: {
        type: [String],
        require: true,
        trim: true,
    }, 
},
{ timestamps: true }
)

export default mongoose.model("recipe", recipeSchema)