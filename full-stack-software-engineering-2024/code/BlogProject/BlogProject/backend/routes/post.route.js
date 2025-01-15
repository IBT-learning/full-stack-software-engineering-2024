import express from "express";
import protectRoute from "../middlewares/protectRoute.js";
import {
  createPost,
  getAllPosts,
  getUserPosts,
  updateUserPost,
  deleteUserPost,
  likeOrUnlikePost,
  saveToOrRemoveFromBookmark,
  getBookmarkedPosts,
  CommentOnPost,
} from "../controllers/post.controller.js";

const router = express.Router();

router.post("/create", protectRoute, createPost);
router.get("/getposts", getAllPosts);
router.get("/getposts/:userid", getUserPosts);
router.get("/bookmarked/:userid", protectRoute, getBookmarkedPosts);
router.put("/update/:postId", protectRoute, updateUserPost);
router.post("/comment/:postId", protectRoute, CommentOnPost);
router.post("/like/:postId", protectRoute, likeOrUnlikePost);
router.post("/bookmark/:postId", protectRoute, saveToOrRemoveFromBookmark);
router.delete("/delete/:postId", protectRoute, deleteUserPost);

export default router;
