import { mongoose } from "../db";

const Category = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 50,
        trim: true,
        unique: true,
        index: true
    },
    description: {
        type: String,
        required: true,
        trim: true,
        maxlength: 200
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    parentCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        index: true
    }
},
    {
        timestamps: true
    }
)

const Categories = mongoose.Model('Category', Category)
export default Categories