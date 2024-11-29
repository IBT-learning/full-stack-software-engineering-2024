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
      required: true,
    },
    likes: [
      {
        type: mongoose.Types.ObjectId,
        ref: User,
        default: [],
      },
    ],
    comments: [
      {
        text: {
          type: String,
          required: true,
        },
        user: {
          type: mongoose.Schema.ObjectId,
          ref: User,
          required: true,
        },
      },
    ],
    bookmarks: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Post",
        default: [],
      },
    ],
  },
  { timestamps: true }
);

const Post = mongoose.model("post", PostSchema);

export default Post;
