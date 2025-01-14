import { mongoose } from "../db.js";
import Post from "../models/post.model.js";
import User from "../models/user.model.js";

export const createPost = async (req, res) => {
  try {
    const { inputs } = req.body;
    const { title, body, image } = inputs;
    const userId = req.user._id;

    const user = await User.findById(userId);
    if (!user) {
      res.status(404).json({ error: "user not found" });
    }

    if (!title || !body) {
      return res.status(402).json({ error: "post must have a title and body" });
    }

    const newPost = new Post({
      title,
      body,
      image,
      user: userId,
    });

    await newPost.save();
    return res.status(201).json({
      success: true,
      msg: "post published successfully",
      data: newPost,
    });
  } catch (error) {
    console.log(`error in createpost endpoint: ${error}`);
    res.status(500).json({ error: "internal server error" });
  }
};

export const getAllPosts = async (req, res) => {
  try {
    const allPosts = await Post.find().sort({ createdAt: -1 }).populate({
      path: "user",
      select: "-password",
    });

    if (!allPosts) {
      res
        .status(400)
        .json({ error: "No post available at this moment, try again" });
    }

    if (allPosts.length === 0) {
      res.status(200).json({});
    } else {
      return res.status(200).json({ success: true, data: allPosts });
    }
  } catch (error) {
    console.log(`error in getAllPosts endpoint: ${error.error}`);
    res.status(500).json({ error: "internal server error" });
  }
};

export const getUserPosts = async (req, res) => {
  try {
    const { userid } = req.params;
    // validating the params
    if (!mongoose.Types.ObjectId.isValid(userid)) {
      return res.status(400).json({ error: "user identity not found" });
    }
    // checking if user exists
    const user = await User.findById(userid);
    if (!user) {
      return res.status(404).json({ error: "user not found" });
    } else {
      const userPosts = await Post.find({
        user: userid,
      })
        .sort({ createdAt: -1 })
        .populate({
          path: "user",
          select: "-password",
        });
      if (!userPosts) {
        return res.status(404).json({ error: "no post available" });
      }
      return res.status(200).json({ data: userPosts });
    }
  } catch (error) {
    console.log(`error in getUserPosts endpoint: ${error}`);
    res.status(500).json({ error: "internal server error" });
  }
};

export const updateUserPost = async (req, res) => {
  try {
    const userId = req.user._id;
    const postId = req.params.postId;
    const { title, body, image } = req.body;
    const options = { new: true };

    if (!mongoose.Types.ObjectId.isValid(postId)) {
      return res.status(400).json({ error: "post id not valid" });
    }

    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ error: "post not found" });
    }

    if (userId.toString() !== post.user.toString()) {
      return res
        .status(401)
        .json({ error: "unauthorised access to edit post" });
    }

    const updatedPost = await Post.findByIdAndUpdate(
      { _id: postId },
      { title, body, image },
      options
    );
    res.status(200).json({
      success: true,
      msg: "post updated successfully",
      data: updatedPost,
    });
  } catch (error) {
    console.log(`error in updateUserPost endpoint: ${error}`);
    res.status(500).json({ error: "internal server error" });
  }
};

export const deleteUserPost = async (req, res) => {
  try {
    const userId = req.user._id;
    const { postId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(postId)) {
      return res.status(400).json({ error: "post id is invalid" });
    }

    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ error: "post not found" });
    }

    if (userId.toString() !== post.user.toString()) {
      return res
        .status(401)
        .json({ error: "unauthorised access to delete post" });
    }
    await Post.findByIdAndDelete({ _id: postId });
    return res.status(200).json({ msg: "post deleted successfully" });
  } catch (error) {
    console.log(`error in deleteUserPost endpoint: ${error.error}`);
    res.status(500).json({ error: "internal server error" });
  }
};

export const likeOrUnlikePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const userId = req.user._id;

    const postToLike = await Post.findById(postId);
    if (!postToLike) {
      res.status(404).json({ error: "post not found" });
    }
    // check if user already liked post
    const likedPost = postToLike.likes.includes(userId);
    if (likedPost) {
      // unlike the post
      await Post.findByIdAndUpdate(
        { _id: postId },
        { $pull: { likes: userId } }
      );
      const updatedLikes = postToLike.likes.filter(
        (id) => id.toString() !== userId.toString()
      );
      res.status(200).json({ updatedLikes });
    } else {
      // like the post
      postToLike.likes.push(userId);

      await postToLike.save();
      const updatedLikes = postToLike.likes;
      res.status(200).json({ updatedLikes });
    }
  } catch (error) {
    console.error("error in likeUnlikePost endPoint:" + error);
    res.status(500).json({ error: error.message });
  }
};

export const saveToOrRemoveFromBookmark = async (req, res) => {
  try {
    const { postId } = req.params;
    const userId = req.user._id;

    const post = await Post.findById(postId);
    if (!post) {
      res.status(404).json({ error: "post not found" });
    }
    const user = await User.findById(userId);
    if (!user) {
      res.status(404).json({ error: "user not found" });
    }
    const bookmarkedPost = user.bookmarks.includes(postId);
    const postBookmarked = post.bookmarks.includes(userId);

    if (bookmarkedPost || postBookmarked) {
      // remove from bookmark list
      await User.findByIdAndUpdate(userId, { $pull: { bookmarks: postId } });
      await Post.findByIdAndUpdate(
        { _id: postId },
        { $pull: { bookmarks: userId } }
      );
      const updatedList = post.bookmarks.filter(
        (id) => id.toString() !== userId.toString()
      );
      res.status(200).json({
        msg: "Removed From Bookmark",
        data: updatedList,
      });
    } else {
      // add to bookmark list
      user.bookmarks.push(postId);
      post.bookmarks.push(userId);
      await user.save();
      await post.save();
      const updatedList = post.bookmarks;
      res.status(200).json({
        msg: "Added to Bookmark",
        data: updatedList,
      });
    }
  } catch (error) {
    console.error("error in saveToBookmark endPoint: " + error);
    res.status(500).json({ "server error": error.message });
  }
};

export const getBookmarkedPosts = async (req, res) => {
  const { userid } = req.params;
  const userId = req.user._id;

  try {
    const user = await User.findById(userid);
    if (!user) {
      res.status(404).json({ error: "user not found" });
    }

    if (userid === userId.toString()) {
      const bookmarkedPosts = await Post.find({ _id: { $in: user.bookmarks } })
        .sort({ createdAt: -1 })
        .populate({
          path: "user",
          select: "-password",
        });
      if (bookmarkedPosts.length === 0) {
        res.status(200).json({ msg: "Your Bookmark List is Empty" });
      } else {
        res.status(200).json({ data: bookmarkedPosts });
      }
    } else {
      res.status(200).json([]);
      return;
    }
  } catch (error) {
    console.error("error in getBookmarkedPosts endPoint: " + error);
    res.status(500).json({ "server error": error.message });
  }
};
