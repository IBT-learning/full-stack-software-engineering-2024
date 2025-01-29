import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    // profilephoto: {
    //     type: String, //photo-url-path, serve as a static file
    //     default: String  //find a defaut photo that will load when
    //     // the user doesn't add a photo
    // },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        maxlength: 30,
        minlength: 10
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique:true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    displayname: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase:true, 
        maxlength: [15, "Display name cannot exceed 15 characters"],
        minlength: [10, "Display name must be at least 10 characters"],
        validate: {
            // the value is the display name
            validator: (value) => {
                // the regex means the string/value should start with @
                const regex = /^@/
                // .test() is a regex method and it checks if the string follows
                // that pattern, if yes it retuns true and the string is valid 
                // for diplay, 
                return regex.test(value)
            },
            // else if false, it throws the error on the message property
                             
            message: "The display name should start with @",
        }
    },
    location:{
        type: String,
        trim: true
    },
    hairtype: {
        type: String,
        trim: true
    },
    porosity: {
        type: String,
        trim: true,
        maxlength: 15
    },
    bio: {
        type: String,
        trim: true
    }

},
{timestamps: true}
)

export default mongoose.model("user", userSchema)


// TODO: how do you, on the frontend, tell the registering user
// that they can't change their username



