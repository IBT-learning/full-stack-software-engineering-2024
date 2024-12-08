import { mongoose } from "../db.js"

const User = new mongoose.Schema({

  username: { type: String, required: true, unique: true },

    password: { 
      type: String, 
      required: true },

    bio: {
      type: String,
      required: false
    },

    profilePhoto: {
      type: String, 
      required: false},
      
    displayName: {
      type: String,
      required: true
    },
})

export default mongoose.model("users", User)
