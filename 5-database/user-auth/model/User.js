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
