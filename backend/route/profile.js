// backend/routes/profile.js

const express = require('express');
const router = express.Router();
const User = require('../model/User');
const authMiddleware = require('../middleware/Auth');

// Middleware to protect routes
router.use(authMiddleware);

// Update user profile
router.put('/update', async (req, res) => {
  const { username, email } = req.body;
  const userId = req.user.id; // From authMiddleware

  try {
    const updatedUser = await User.findByIdAndUpdate(userId, { username, email }, { new: true });
    res.json(updatedUser);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Fetch user profile
router.get('/me', async (req, res) => {
  const userId = req.user.id; // From authMiddleware

  try {
    const user = await User.findById(userId);
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
