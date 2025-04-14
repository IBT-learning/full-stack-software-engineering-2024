import express from "express"
const router = express.Router()
import path from "path"
import fs from "fs"

// create file path of my json file
const filePath = path.join(import.meta.dirname, "../static/blogposts.json")
// read the contents in that file path, convert the json content string into an JS array
const postsArray = JSON.parse(fs.readFileSync(filePath, "utf-8"))


// endpoint for accessing my blog data/ get all my posts
router.get("/myjson", (req,res) => {
    res.sendFile(path.join(import.meta.dirname, "../static/blogposts.json"))
})

// get posts by id
router.get("/myjson/:id", (req, res) => {
    const { id } = req.params

    const findPost = postsArray.find((post) => {
        return post.id === id})

  if (findPost) {
    res.json(findPost)
  } else {
    res.status(404).send("That post ID does not exist")
  }
})


export default router