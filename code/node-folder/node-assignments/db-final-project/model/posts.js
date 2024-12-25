import {mongoose} from "../db.js";
const Post = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        index: true
    },
    body: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true
    },
    images: [{
        type: String
    }],
    tags: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tag',
        index: true
    }],
    likes: {
        type: Number,
        default: 0,
        min: 0
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        index: true
    }],
    shares: {
        type: Number,
        default: 0,
        min: 0
    },
},
    {
        timestamps: true
    })

// Posts.index({ userId: 1, createdAt: -1 });

const Posts = mongoose.model("Post", Post);
export default Posts