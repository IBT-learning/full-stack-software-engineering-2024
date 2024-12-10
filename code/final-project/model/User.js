import { mongoose } from "../db.js"

const User = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        maxLength: [20, "Username should not exceed 20 characters"],
        trim: true,
    },
    displayName: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    email: {
        type: String,
        maxLength: 50,
    },
    password: {
        type: String,
        required: true,

    }
})

export default mongoose.model("user", User)