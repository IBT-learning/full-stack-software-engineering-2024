import {mongoose} from "../db.js";

const blogPost = new mongoose.Schema ({
    body : {
        type: String,
        required: true,
        trim: true
    },

    userId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },

    postTitle: {
        type: String,
        required: true,
        trim: true
    },

    images: {
        type: String // URL or file path to the image
    }
},
    {
        timestamps: true
    }
)

export default mongoose.model ("Post", blogPost)