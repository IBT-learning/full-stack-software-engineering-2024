import { mongoose } from "../db.js"

const User = new mongoose.Schema(
{
   username: {
        type: String,
        required: true,
        unique: true,
        maxlength: 50
   },
   email: {
        type: String,
        required: true,
        unique: true,
   },
   password: {
        type: String,
        required: true,
   },
})

export default mongoose.model ("users", User)