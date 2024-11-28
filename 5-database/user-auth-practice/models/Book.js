import { mongoose } from "../db.js"

const Book = new mongoose.Schema (
{
    id: Number,
    title:{
        type: String,
        required: true,
        maxLength: 100,
        trim: true,
    },
    author: {
        type: String,
        required: false,
        default: "Author Unknown",
        maxLength: 100,
        trim: true,
    }   
},
{
    timestamps: true
}
)

export default mongoose.model("book", Book)