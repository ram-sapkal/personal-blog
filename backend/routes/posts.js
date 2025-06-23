import express from 'express';
import jwt from 'jsonwebtoken';
import Post from '../models/Post.js';

const router = express.Router();

function authenticateJWT(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.sendStatus(401);

  const token = authHeader.split(' ')[1];
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

router.post('/post', authenticateJWT, async (req, res) => {
  const { title, content } = req.body;
  try {
    const post = new Post({
      title,
      content,
      authorId: req.user.id
    });
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/posts', async (req, res) => {
  const { author } = req.query;
  try {
    const query = author ? { authorId: author } : {};
    const posts = await Post.find(query).sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
