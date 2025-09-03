const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Register new user
router.post('/', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update username
router.put('/:username', async (req, res) => {
  try {
    const updatedUser = await User.findOneAndUpdate(
      { username: req.params.username },
      { username: req.body.username },
      { new: true }
    );
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Add favorite movie
router.post('/:username/favorites/:movieTitle', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (!user.favorites.includes(req.params.movieTitle)) {
      user.favorites.push(req.params.movieTitle);
      await user.save();
    }
    res.json({ message: `Movie '${req.params.movieTitle}' has been added to favorites.` });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Remove favorite movie
router.delete('/:username/favorites/:movieTitle', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    user.favorites = user.favorites.filter(title => title !== req.params.movieTitle);
    await user.save();
    res.json({ message: `Movie '${req.params.movieTitle}' has been removed from favorites.` });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Deregister user
router.delete('/:username', async (req, res) => {
  try {
    await User.deleteOne({ username: req.params.username });
    res.json({ message: `User '${req.params.username}' has been removed.` });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
