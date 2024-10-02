import { mongoose } from "../db.js"

/* 
NOTE: 
this is just a copy of the schema from the mongoose-schemas lesson
*/

const Book = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 150,
      trim: true,
    },
    author: {
      type: String,
      required: false,
      default: "Author Unknown",
      maxlength: 150,
    },
    ratings: [{ type: String, maxlength: 50 }],
    //   genre: {
    //     type: String,
    //     required: false,
    //     enum: ["nonfiction", "history", "whatever"],
    //   },
  },
  { timestamps: true }
)

export default mongoose.model("book", Book)
