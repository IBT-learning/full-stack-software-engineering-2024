import express from "express"
import { mongoose } from "../db.js"
import Post from "../model/Post.js"
import tokenValidator from "../middlewares/tokenValidator.js";

const router = express.Router()



router.get("/", async (req, res) => {
    const posts = await Post.find()
    res.send(posts)
})

router.post('/posts',tokenValidator, async (req, res) => {

    // fetch(`http://localhost:4000/blog`,{
    //     headers : {
    //         authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzJiMzE3YTQzM2VlMjgzYjQ0ODU3NGYiLCJ1c2VybmFtZSI6IkVuYW0iLCJpYXQiOjE3MzA4ODcwMzksImV4cCI6MTczMDk3MzQzOX0.5vz8EPCG0aQfofKfMScT8HjJexvt5qRWBq4HgaXFbHs`,
    //     }
    // })
    const { body, image } = req.body;
    try {
        const newPost = new Post({
            body,
            image,
            userId: req.user._id,
        });
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put('/posts/:id', tokenValidator, async (req, res) => {
    const { id } = req.params;
    const { body, image } = req.body;
    try {
        const post = await Post.findById(id);
        if (!post) return res.status(404).json({ message: 'Post not found' });
        if (post.userId.toString() !== req.user._id) return res.status(403).json({ message: 'Not authorized' });
        
        post.body = body || post.body;
        post.image = image || post.image;
        const updatedPost = await post.save();
        
        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete('/posts/:id', tokenValidator, async (req, res) => {
    const { id } = req.params;
    try {
        const post = await Post.findById(id);
        if (!post) return res.status(404).json({ message: 'Post not found' });
        if (post.userId.toString() !== req.user._id) return res.status(403).json({ message: 'Not authorized' });

        await post.deleteOne();
        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});





export default router

