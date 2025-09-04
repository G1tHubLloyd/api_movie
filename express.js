const express = require('express');
const app = express();
app.use(express.json());

// ----------------------
// 🎬 Movies Endpoints
// ----------------------

// Get all movies
app.get('/movies', (req, res) => {
  res.send('GET request: Returning all movies');
});

// Get a movie by ID
app.get('/movies/:id', (req, res) => {
  res.send(`GET request: Returning movie with ID ${req.params.id}`);
});

// Add a new movie
app.post('/movies', (req, res) => {
  res.send('POST request: Adding a new movie');
});

// Update a movie by ID
app.put('/movies/:id', (req, res) => {
  res.send(`PUT request: Updating movie with ID ${req.params.id}`);
});

// Delete a movie by ID
app.delete('/movies/:id', (req, res) => {
  res.send(`DELETE request: Deleting movie with ID ${req.params.id}`);
});

// Get genre description by name
app.get('/movies/genre/:name', (req, res) => {
  res.send(`GET request: Returning description for genre "${req.params.name}"`);
});

// Get director details by name
app.get('/movies/director/:name', (req, res) => {
  res.send(`GET request: Returning details for director "${req.params.name}"`);
});

// ----------------------
// 👤 Users Endpoints
// ----------------------

// Get all users
app.get('/users', (req, res) => {
  res.send('GET request: Returning all users');
});

// Get a user by ID
app.get('/users/:id', (req, res) => {
  res.send(`GET request: Returning user with ID ${req.params.id}`);
});

// Register a new user
app.post('/users', (req, res) => {
  res.send('POST request: Registering a new user');
});

// Update user info by ID
app.put('/users/:id', (req, res) => {
  res.send(`PUT request: Updating user with ID ${req.params.id}`);
});

// Delete a user by ID
app.delete('/users/:id', (req, res) => {
  res.send(`DELETE request: Deleting user with ID ${req.params.id}`);
});

// Add a movie to user's favorites
app.post('/users/:id/favorites/:movieId', (req, res) => {
  res.send(`POST request: Movie ${req.params.movieId} added to user ${req.params.id}'s favorites`);
});

// Remove a movie from user's favorites
app.delete('/users/:id/favorites/:movieId', (req, res) => {
  res.send(`DELETE request: Movie ${req.params.movieId} removed from user ${req.params.id}'s favorites`);
});

// ----------------------
// 🚀 Start the Server
// ----------------------
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
