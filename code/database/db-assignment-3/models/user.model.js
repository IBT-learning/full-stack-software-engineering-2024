import { mongoose } from "../db.js";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      maxlength: 60,
    },
    username: {
      type: String,
      required: true,
      maxlength: 50,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      maxlength: 50,
      unique: true,
    },
    gender: {
      type: String,
      required: false,
      default: "not declared",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("users", userSchema);

export default User;
