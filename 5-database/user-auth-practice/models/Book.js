import { mongoose } from "../db.js"

const Book = new mongoose.Schema (
{
    id: Number,
    title:{
        type: String,
        required: true,
        maxLength: [100, "Title must be 100 characters or less"],
        trim: true,
        // validate: {
        //     validator: (value) => {
        //     if (value.includes("Love")) {
        //         return true
        //     }
        //     return false
        // },
        // message: "Title has to be a book about love"
    //}
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