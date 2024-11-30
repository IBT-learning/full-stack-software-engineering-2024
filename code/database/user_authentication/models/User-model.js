import {mongoose} from "../db.js"

const User = new mongoose.Schema({
    username : {
        type:String,
        required: true,
        maxlength: 40,
        unique: true
    },

    email : {
        type:String,
        required: true,
        unique: true
    },

    password : {
        type: String,
        required: true,
    }
    
})

export default mongoose.model ("User", User)