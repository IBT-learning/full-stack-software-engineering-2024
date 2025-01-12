import { mongoose } from "../db.js";
const Recipe = new mongoose.Schema ({
    title: String,
    author: String,
    instructions: String,
    ingredients: [{type: String, maxlength: 150 }]

})
 export default mongoose.model("recipe", Recipe)