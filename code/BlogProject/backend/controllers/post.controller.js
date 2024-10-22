import Post from "../models/post.model.js";
import User from "../models/user.model.js";

export const createPost = async (req, res) => {
  try {
    const { title, body, image } = req.body;
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
    return res.status(201).json({ success: true, data: newPost });
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

export const getPostsByUser = async (req, res) => {
  try {
    const userId = req.user._id;
    const userid = req.params.userid;

    // validating the finder
    const authUser = await User.findById(userId);
    if (!authUser) {
      return res
        .status(402)
        .json({ error: "access denied,authorization failed" });
    }
    // validating the params
    if (!mongoose.Types.ObjectId.isValid(userid)) {
      return res.status(400).json({ error: "pls provide a valid input" });
    }
    // checking if user exists
    const user = await User.findById(userid);
    if (!user) {
      return res.status(404).json({ error: "user not found" });
    } else {
      const userPosts = await Post.findOne({
        user: userid,
      })
        .sort({ createdAt: -1 })
        .populate({
          path: "user",
          select: "-password",
        });
      if (!userPosts) {
        return res.status(404).json({ msg: "no post available" });
      }
      return res.status(200).json({ success: true, data: userPosts });
    }
  } catch (error) {
    console.log(`error in getPostsByUser endpoint: ${error}`);
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
    res.status(200).json({ success: true, data: updatedPost });
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
    return res.status(200).json({ success: "post deleted successfully" });
  } catch (error) {
    console.log(`error in deleteUserPost endpoint: ${error.error}`);
    res.status(500).json({ error: "internal server error" });
  }
};
