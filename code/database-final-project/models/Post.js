import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  body: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
  title: { type: String, required: true },
  image: { type: String }, // Path to static image
});

export default mongoose.model('Post', postSchema);
