import { mongoose } from "../db.js";



const User =new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            unique: true,
        }
    }
)

export default mongoose.model("user", User)