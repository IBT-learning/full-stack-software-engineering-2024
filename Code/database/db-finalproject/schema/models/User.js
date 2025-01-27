import { mongoose } from "../../db.js";

const User = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        maxlength: 30,
    },
    password:{
        type: String,
        required: true,
    },
    bio:{
        type: String,
        maxlength: 100,
        required: false,
    },
    profilePic:{
        type: String,
    },
    
})

export default mongoose.model("User", User)