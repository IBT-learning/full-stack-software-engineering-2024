import {mongoose} from "../db.js"

const UserSchema = new mongoose.Schema({

    profile_name:{
        type: String,
        required: true,
        minlength: 5,
        maxlength: 30,
    },

    handle:{ // public identifier
        type: String,
        required: true,
        minlength: 6,
        maxlength: 20,
        unique: true
    },

    username:{ // login
        type: String,
        required: true,
        minlength: 6,
        maxlength: 30,
        unique: true
    },

    profileImg: {
        type: String,
        default:"../images/profile sign-in.png"
    },

    bio: {
        type: String,
        maxlength: 200,
      },

      tagline:{
        type: String,
        maxlength: 40
      },

    password: {
        type: String,
        required: true,
        minlength: 6
    },
},

    {
        timestamps: true,

}) 

export default mongoose.model ("User", UserSchema)

