import express from "express"
import Post from "../model/Post-Scema.js"

const blogRouter = express.Router()


blogRouter.get("/", async (req, res) => {

    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error fetching posts" });
    }
});

// blogRouter.post("/create", async (req, res) => {
//     try {
//         const { body, userId, postTitle, images } = req.body; 

//         if (!body || !userId || !postTitle) {
//             return res.status(400).json({ message: "Missing required fields" });
//         }

//         const newPost = new Post({
//             body,
//             userId,
//             postTitle,
//             images
//         });

//         await newPost.save();
//         res.status(201).json({ message: "Post created successfully", post: newPost });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ message: "Error creating post" });
//     }
// });


export default blogRouter
