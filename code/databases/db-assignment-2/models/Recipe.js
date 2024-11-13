import { mongoose } from "../db.js";

const Recipe = new mongoose.Schema(
    {
        title : String,
        author : String,
        instructions: String,
        ingredients: [String]
    },
    {timestamps : true}
)

export default mongoose.model("recipes", Recipe)