import { mongoose } from "../db.js";

const Recipe = new mongoose.Schema(
    {
        title : String,
        author : String,
        instructions: String,
        ingredients: [String],
        createdBy: mongoose.Schema.ObjectId
    },

    {timestamps : true}
)

export default mongoose.model("recipes", Recipe)