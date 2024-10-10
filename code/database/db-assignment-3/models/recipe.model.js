import { mongoose } from "../db.js";
import User from "./user.model.js";

const Recipe = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    ingredients: [
      {
        type: String,
        required: true,
      },
    ],
    instructions: {
      type: String,
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.ObjectId,
      ref: User,
    },
  },
  { timestamps: true }
);

export default mongoose.model("recipe", Recipe);
