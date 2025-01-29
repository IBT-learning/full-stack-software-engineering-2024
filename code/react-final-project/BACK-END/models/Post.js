import mongoose from "mongoose"

const postSchema = new mongoose.Schema(
  {
    posttitle: {
      type: String,
      required: true,
      trim: true,
    },
    postbody: {
      type: String,
      required: true,
      trim: true,
    },
    createdBy: {
      type: mongoose.Schema.ObjectId,
      required: true,
    },
  },
  { timestamps: true, strict: true }
  // strict: true, rejects any fields not defined in the schema
)

export default mongoose.model("post", postSchema)
