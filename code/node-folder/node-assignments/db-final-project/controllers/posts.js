import express from 'express'
const router = express.Router()

import Post from '../model/posts.js'
import { mongoose }from '../db.js'
import tokenvalidator from '../middlewares/tokenvalidator.js'
import { checkBody, checkBodyUpdate, checkFields} from '../middlewares/fieldCheck.js';


router.get('/', async (req, res) => {
    try {
        const posts = await Post.find()
        res.status(200).send(posts)
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
})

router.get('/:id', async (req, res) => {
    try {
        if (mongoose.Types.ObjectId.isValid(req.params.id)) {
            const posts = await Post.findById(req.params.id)
            if (posts) {
                return res.status(200).json(posts)
            } else {
                return res.status(404).json({ message: 'Post not found' })
            }
        }
        else {
            return res.status(400).json({ message: 'Invalid ID' })
        }
    } catch (e) {
        return res.status(500).json({ message: e.message })
    }
})

router.get('/search/:userId', async (req, res) => {
    try {
        const id = req.params.userId
        if (!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({ message: 'Invalid ID' })
        }
        const posts = await Post.find({ userId: id })
        if (posts.length > 0) {
            return res.status(200).json(posts)
        } else {
            return res.status(404).json({ message: 'No posts found for this user' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
})
router.post('/add/posts', checkBody, checkFields, tokenvalidator, async (req, res) => {
    try {
        const newPost = new Post(req.body)
        
        newPost.userId = req.user.userId
        const savedPost = await newPost.save()
        return res.status(201).json(savedPost)
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
})

router.put('/update/:id', checkBody, checkBodyUpdate, tokenvalidator, async (req, res) => {
    try {
        const postID = req.params.id
        if (!mongoose.Types.ObjectId.isValid(postID)){
            return res.status(400).json({ message: 'Invalid ID' })
        }
        const post = await Post.findById(postID)
        if (!post) {
            return res.status(400).json({ message: 'Post not found' })
        }
        if (!post.userId.equals(req.user.userId)) {
            return res.status(403).json({ message: 'You are not authorized to update this post' })
        }
        const updatedPost = await Post.findByIdAndUpdate(postID, req.body, { new: true })
        return res.status(200).json(updatedPost)
    } catch (err) {
            return res.status(500).json({ message: err.message })
        }
})
router.delete('/delete/:id', tokenvalidator, async (req, res) => {
    try {
        const postID = req.params.id
        if (!mongoose.Types.ObjectId.isValid(postID)){
            return res.status(400).json({ message: 'Invalid ID' })
        }
        const post = await Recipe.findById(postID)
        if (!post) {
            return res.status(404).json({ message: 'Post not found' })
        }
        if (!post.userId.equals(req.user.userId)) {
            return res.status(403).json({ message: 'You are not authorized to update this post' })
        }
        const deletedPost = await Post.findByIdAndDelete(postID)
        return res.status(200).json({ message: 'Post deleted', deletedPost })
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
})
router.use((req, res, next) => {
    return res.status(404).send({ error: 'Route not valid' });
});

export default router