import {mongoose} from "../db.js";

const Comment = new mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    },
    postAuthor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        index: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true
    },
    content: {
        type: String,
        required: true
    },
},
    {
        timestamps: true
    }
)
const Comments = mongoose.model('Comment', Comment)
export default Comments