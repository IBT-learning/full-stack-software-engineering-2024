import express from 'express';
import Post from "../models/Posts.js";
import { mongoose } from "../db.js"
import tokenValidation from "../middlewares/tokenValidation.js"
import Posts from '../models/Posts.js';

const router = express.Router();

//get all blog posts in order of latest to oldest 
router.get("/", async (req,res) => {
    try{
        const posts = await Post.find()
        res.send(posts)
    } catch (err){
        res.status(500).send(`Error fetching recipes: ${err}`)
    }
})

//get all blog posts of one user aboutme page
router.get("/:username", async (req, res) =>{
    const username = req.params.username

    if(!mongoose.Types.ObjectId.isValid(username)){
        res.status(400).send("Invalid username")
    }
    try{
      const userPosts = await Post.find({createdBy: username})

      if (userPosts.length === 0 ){
        res.status(404).send('no posts found for this user')
      }

      return res.json(userPosts)

    } catch (err){
        console.error(err)
        res.status(500).send("server error")
    }
})

//create a blog post 
router.post("/", async (req, res) => {
    try{
        const newPost = new Post({
            ...req.body,
            createdBy: req.user._id
        });
        await newPost.save()
        res.send(`added ${req.body.title} by ${req.body.author}`)
    }catch (err){
        console.error(err)
        res.status(422).send("error creating new post")
    }
})
//update/edit ones own blog post
router.put("/update/:postId", tokenValidation, async (req, res) => {
    if (mongoose.Types.ObjectId.isValid(req.params.postId)){
        const filter = {_id: req.params.postId}
        const body = req.body

        const post = await Post.findById(req.params.postId)
        if (!post) {
            return res.status(404).send("Post not found")
        }
    

    if (post.createdBy.toString()!==req.user._id.toString()){
        res.status(403).send(`You are not authorized to update this`)
    }

    const updatePost = await Post.updateOne(filter, req.body);

    if (updatePost.modifiedCount === 1){
        res.send("Post successfully updated");
    } else {
        res.send(`operation failed`)
    }

} else {
    res.status(404).send("Invalid Post id")
}
})
//delete one's own blog post

//delete one's profile/user



export default router