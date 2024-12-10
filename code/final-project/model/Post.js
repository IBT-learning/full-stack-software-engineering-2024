import { mongoose } from "../db.js"

const Post = new mongoose.Schema({
    body: {
        type: String,
        required: true,
        maxLenght: [200, "200 words exceeded"]
    },
    userId:  {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    video: {
        type: String,
        required: false
    } 
},
{
    timestamps: true
}
)