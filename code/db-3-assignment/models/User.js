import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 10,
        maxlength: 50,
        trim: true
    }, 
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
}, 
{ timestamps: true }
)

export default mongoose.model("user", userSchema)