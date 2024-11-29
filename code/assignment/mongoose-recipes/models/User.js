import { mongoose } from "../db.js"

const User = new mongoose.Schema ({
    username: {
        type: String,
        maxlength: 20,
        unique: true,
        required: true,
    },
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

export default mongoose.model ("users", User)