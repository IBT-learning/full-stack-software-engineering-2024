import { mongoose } from "../db.js";
import bycrpt from "bcrypt"

const User = new mongoose.Schema({
    email: { 
        type: String, 
        required: true, 
        unique: true,
    },
    password: { 
        type: String, 
        required: true,
    }
})

export default mongoose.model("User", User)