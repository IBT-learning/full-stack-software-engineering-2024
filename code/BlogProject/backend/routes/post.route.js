import express from "express";
import protectRoute from "../middlewares/protectRoute.js";
import {
  createPost,
  getAllPosts,
  getPostsByUser,
  updateUserPost,
  deleteUserPost,
} from "../controllers/post.controller.js";

const router = express.Router();

router.post("/create", protectRoute, createPost);
router.get("/getposts", getAllPosts);
router.get("/getone/:userid", protectRoute, getPostsByUser);
router.put("/update/:postId", protectRoute, updateUserPost);
router.delete("/delete/:postId", protectRoute, deleteUserPost);

export default router;
