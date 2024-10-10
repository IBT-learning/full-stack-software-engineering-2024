import { mongoose } from "../db.js"

/* 
NOTE: 
this is just a copy of the schema from the mongoose-schemas lesson
except we're adding more validators
*/

// custom validator functions must return a boolean
const loveValidator = (value) => {
  if (value.includes("Love")) {
    return true
  }
  return false
}

const Book = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxLength: [
        // if the value is an array, the second element is the error message
        150,
        // error messages have access to {VALUE}
        "Titles must be 150 charactes or less. {VALUE} is too long",
      ],
      trim: true,
      // a custom validator can be a function object
      // validate: loveValidator,
      // or an object with keys for the function and for the error message
      validate: {
        validator: loveValidator,
        message: "This library is only for books about love",
      },
    },
    author: {
      type: String,
      required: false,
      default: "Author Unknown",
      maxlength: 150,
    },
    // for arrays, just wrap the validator details in square brackets!
    ratings: [{ type: String, maxlength: 50 }],
    // an enum is a choice of limited options, like a drop-down menu
    //   genre: {
    //     type: String,
    //     enum: ["nonfiction", "history", "whatever"],
    //   },
  },
  // this will include createdAt and updatedAt timestamps by default
  { timestamps: true }
)

export default mongoose.model("book", Book)
