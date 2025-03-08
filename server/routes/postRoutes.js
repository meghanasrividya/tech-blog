const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// ✅ Get all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: "Error fetching posts" });
  }
});

// ✅ Create a new post
router.post("/", async (req, res) => {
  try {
    const { title, content, userId } = req.body;
    const newPost = await Post.create({ title, content, userId });
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: "Error creating post" });
  }
});

module.exports = router;
