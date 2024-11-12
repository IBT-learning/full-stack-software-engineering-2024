import { mongoose } from "../db";

const Tag = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    description: {
        type: String,
        maxlength: 200
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    postCount: {
        type: Number,
        default: 0,
        index: true
    }
  }, 
    {
        timestamps: true
    }
);
  
const Tags = mongoose.model('Tag', Tag);
export default Tags;
  