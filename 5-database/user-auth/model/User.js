import { mongoose } from "../db.js"

const User = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    maxlength: 60,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    // match takes a regular expression string
    // only strings that match the regex will be validated
    match:
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
  },
  // we won't put other contraints here
  // because we won't be storing the actual passwords
  // we will store an encoded hash string instead
  password: {
    type: String,
    required: true,
  },
})

export default mongoose.model("user", User)
