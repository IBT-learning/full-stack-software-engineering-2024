import express from "express"
const router = express.Router()
import { mongoose } from "../db.js"
import Blog  from "../schema-models/Blog.js"
import userValidation from "../middleware/validate.js"


router.get("/get", async (req, res) => {
    
    const blogs = await Blog.find()
    res.send(blogs)
    console.log(blogs);
    
  })

router.get("/find/:blogId", async (req, res) => {
    if (mongoose.Types.ObjectId.isValid(req.params.blogId)) {
      const blog = await Blog.findOne({ _id: req.params.blogId })
       blog? res.json(blog) : res.status(404).send("blog not found")
       console.log(blog);
       
    } else {
      res.status(404).send("invalid  id")
    }
  })

  router.post("/post", userValidation, async (req, res) => {
    try {
      const newBlog = new Blog(req.body)
      console.log(newBlog);
      
      await newBlog.save()
      res.send("Bilha added a new blog")
      
    } catch (err) {
      res.status(400).send("Invalid JSON syntax")
      console.log("Invalid JSON");
      
    }
  })

  router.put("/update/:blogId", userValidation, async (req, res) => {
    if (mongoose.Types.ObjectId.isValid(req.params.blogId)) {
      const blog1 = await Blog.updateOne( {_id: req.params.blogId}, req.body)
      console.log(blog1)
    } else {
      res.status(404).send("invalid id")
    }
  })

  router.delete("/delete/:blogId", userValidation, async (req, res) => {
    if (mongoose.Types.ObjectId.isValid(req.params.blogId)) {
      const filter = { _id: req.params.blogId }
       await Blog.deleteOne(filter)
       res.send("Deleted successfully")
    } else {
      res.status(404).send("invalid id")
    }
  })
   
  export default router