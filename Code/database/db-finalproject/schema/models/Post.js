import { mongoose } from "../../db.js";

const Post = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        maxlength: 100,
    },
    content:{
        type: String,
        required: true,
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
})

export default mongoose.model("post", Post)