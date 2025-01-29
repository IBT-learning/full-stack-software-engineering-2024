// import express from "express";
// const router = express.Router()
// ---use the aproach above when you need the whole express object
// and want to use other express methods from the express object eg.
// express.json()
// use the second method as used below when you only need
// the router method off of the express object

import { Router } from "express"
const router = Router()

import {
  getRecentPosts,
  getAllPosts,
  getSpecificUserPosts,
  createPost,
  updatePostById,
  deletePostById,
} from "../controllers/posts-controller.js"

router.get("/recent", getRecentPosts)

router.get("/", getAllPosts)

router.get("/specific_user_posts", getSpecificUserPosts)

router.post("/create", createPost)

router.put("/update/:post_id", updatePostById)

router.delete("/delete/:post_id", deletePostById)

export default router
