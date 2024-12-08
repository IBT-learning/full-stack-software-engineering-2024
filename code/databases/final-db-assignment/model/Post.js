import { mongoose } from "../db.js"


const Post = new mongoose.Schema(
  {
      body: {
        type: String,
        required: true,
        trim: true
      },
      userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User.js',      
        required: true
      },
      createdAt: {
        type: Date,
        default: Date.now 
      },
      image: {
        type: String,       
        required: false
      },

  },
  {
    timestamps: true 
  },
  { collection: 'posts' }
)

export default mongoose.model("posts", Post)
