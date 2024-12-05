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
    createdBy: {
        type: mongoose.Schema.ObjectId,
        required: true
    }
},
// { timestamps: true }
)

export default mongoose.model("recipe", recipeSchema)