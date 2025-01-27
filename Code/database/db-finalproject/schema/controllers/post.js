import express from "express"
const router = express.Router()

import Post from "../models/Post.js"

import tokenValidator from "../middleware/tokenValidator.js"


router.get("/", tokenValidator, async (req, res) => {
  try{
    const posts = await Post.find()
    res.json(posts)
  } catch(err){
    console.log(err)
    res.status(500).json({message: err.message})
  }
})
 
 
 //Create a new post
 router.post("/create", tokenValidator, async (req, res) => {
   try {
     const newPost = new Post({...req.body, createdBy: req.user._id})
     await newPost.save()
     res.send(`Added ${req.body.title} post by ${req.user.username}`)
   } catch (err) {
     res.status(400).send(err)
   }
 })
 
 //Update an existing post
 router.put("/update/:id", tokenValidator, async (req, res) => {
   try {
     const post = await Post.findById(req.params.id);
     if (!post) {
       return res.status(404).send("Post not found");
     }
     if (recipe.createdBy.toString() !== req.user._id.toString()) {
       return res.status(403).send("You do not have permission to update this post");
     }
     Object.assign(post, req.body);
     await post.save();
     res.send(`Updated ${post.title} post on ${post.createdAt}`);
   } catch (err) {
     console.log("Error in update recipe:", err);
     res.status(400).send(err);
   }
 })
 
 //Delete a recipe
 router.delete("/delete/:id", tokenValidator, async (req, res) => {
   try {
     const post = await Post.findById(req.params.id);
     if (!post) {
       return res.status(404).send("Post not found");
     }
     if (post.createdBy.toString() !== req.user._id.toString()) {
       return res.status(403).send("You do not have permission to delete this post");
     }
     await post.deleteOne();
     res.send(`Deleted post on ${recipe.title}`);
   } catch (err) {
     console.log("Error in delete recipe:", err);
     res.status(400).send(err);
   }
 })
 

export default router