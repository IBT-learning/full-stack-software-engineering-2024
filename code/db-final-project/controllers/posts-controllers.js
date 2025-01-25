import { mongoose } from "../db.js"
import Post from "../models/Post.js"

const getAllPosts = async (req, res) => {
  try {
    const getAllPosts = await Post.find()
    res.json(getAllPosts)
  } catch (error) {
    res.status(500).json({ message: "Error retrieveing posts" })
  }
}

export { getAllPosts }
