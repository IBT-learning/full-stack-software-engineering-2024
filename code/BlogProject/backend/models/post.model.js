import { mongoose } from "../../db.js";
import User from "./user.model.js";

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxLength: 60,
    },
    body: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
      default: "",
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: User,
      enum: ["comment", "likes", "bookmark"],
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", PostSchema);

export default Post;
