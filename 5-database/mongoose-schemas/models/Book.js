import { mongoose } from "../db.js"

const Book = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxLength: 150,
      trim: true,
    },
    author: {
      type: String,
      required: false,
      default: "Author Unknown",
      maxLength: 150,
    },
    //   genre: {
    //     type: String,
    //     required: false,
    //     enum: ["nonfiction", "history", "whatever"],
    //   },
  },
  { timestamps: true }
)

export default mongoose.model("book", Book)
