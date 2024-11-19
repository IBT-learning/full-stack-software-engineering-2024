import mongoose from "mongoose";

const Post = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        maxlength:100,
        trim:true,
    },
    content:{
        type: String,
        required:true,
        maxlength:1000,
    },
    createdBy:{
        type:mongoose.Schema.ObjectId,
        required: true,
        ref:"user",
    }
})

export default mongoose.model("post", Post, "Posts")