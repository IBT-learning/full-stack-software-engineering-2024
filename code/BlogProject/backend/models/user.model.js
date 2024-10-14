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
    },
    email: {
      type: String,
      required: true,
      maxLength: 50,
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
      maxLength: 15,
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
      type: string,
      required: false,
      default: "",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
