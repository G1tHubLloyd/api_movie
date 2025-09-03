const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  genre: String,
  director: String,
  imageURL: String,
  featured: Boolean
});

module.exports = mongoose.model('Movie', movieSchema);
