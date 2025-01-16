import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    postbody: {
        type: String,
        required: true,
        trim: true,
    },
    createdBy: {
        type: mongoose.Schema.ObjectId,
        required: true,
    }
},
{timestamps: true}
)

export default mongoose.model("post", postSchema)