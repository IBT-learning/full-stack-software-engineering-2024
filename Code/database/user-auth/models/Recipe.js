import { mongoose } from "../db.js";

const Recipe = new mongoose.Schema({
    title: {
        type: String,
        maxlength: 100
    },
    author: {
        type: String,
        maxlength: 50
    },
    ingredients: [String],

    instructions: {
        type: String,
        maxlength: 2000
    },

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

})



export default mongoose.model("Recipe", Recipe)

