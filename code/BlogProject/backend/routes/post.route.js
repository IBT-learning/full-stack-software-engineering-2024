import express from "express";
import {
  createPost,
  getAllPosts,
  getPostsByUser,
  updateUserPost,
  deleteUserPost,
} from "../controllers/post.controller.js";

const router = express.Router();

router.post("/create", createPost);
router.get("/getposts", getAllPosts);
router.get("/getone", getPostsByUser);
router.put("/update", updateUserPost);
router.delete("/delete", deleteUserPost);

export default router;
