import { mongoose } from "../db.js"

const Recipe = new mongoose.Schema (
    {
        title: String,
        author: String,
        instructions: String,
        ingredients: [String],
        createdBy: { type: mongoose.Schema.ObjectId, ref: "User", required: true}
    },

    {
        timestamps : true
    }
)
export default mongoose.model(" recipe", Recipe)