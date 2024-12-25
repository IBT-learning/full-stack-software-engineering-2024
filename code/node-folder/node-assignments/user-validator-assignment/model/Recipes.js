import {mongoose} from "../db.js";
const recipes = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    ingredients: {
        type: [String],
        required: true
    },
    instructions: {
        type: String,
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId
    }
})

const recipe = mongoose.model("Recipe", recipes);
export default recipe