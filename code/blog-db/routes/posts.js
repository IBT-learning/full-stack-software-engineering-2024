const express = require('express');
const Post = require('../models/Post');
const jwt = require('jsonwebtoken');
const router = express.Router();

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) return res.status(401).send('Token missing');

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).send('Invalid token');
    req.user = user;

    next();
  });
};

// Get all posts
router.get('/posts', async (req, res) => {
  const posts = await Post.find().populate('userId', 'email');
  res.json(posts);
});

// Create a new post
router.post('/posts', authenticateToken, async (req, res) => {
  const { title, body } = req.body;
  const post = new Post({
    title,
    body,
    userId: req.user.userId,
  });
  await post.save();
  res.status(201).send('Post created successfully');
});

module.exports = router;
