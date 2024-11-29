import { mongoose } from "../../db.js";

const userSchema = new mongoose.Schema(
  {
    profilename: {
      type: String,
      required: true,
      maxLength: 60,
    },
    username: {
      type: String,
      required: true,
      maxLength: 30,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      maxLength: 50,
      unique: true,
    },
    gender: {
      type: String,
      required: false,
      default: "not specified",
    },
    location: {
      type: String,
      required: false,
      default: "not specified",
      maxLength: 100,
    },
    password: {
      type: String,
      required: true,
    },
    coverimage: {
      type: String,
      required: false,
      default: "",
    },
    profileimage: {
      type: String,
      required: false,
      default: "",
    },
    Bio: {
      type: String,
      required: false,
      default: "",
    },
    followers: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        default: [],
      },
    ],
    followings: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        default: [],
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
