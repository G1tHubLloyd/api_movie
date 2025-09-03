const express = require('express');
const app = express();
app.use(express.json());

// Movies
app.get('/movies', (req, res) => {
  res.send('GET request: Returning all movies');
});

app.get('/movies/:title', (req, res) => {
  res.send(`GET request: Returning data for movie titled "${req.params.title}"`);
});

// Genres
app.get('/genres/:name', (req, res) => {
  res.send(`GET request: Returning description for genre "${req.params.name}"`);
});

// Directors
app.get('/directors/:name', (req, res) => {
  res.send(`GET request: Returning bio for director "${req.params.name}"`);
});

// Users
app.post('/users', (req, res) => {
  res.send('POST request: Registering new user');
});

app.put('/users/:username', (req, res) => {
  res.send(`PUT request: Updating user "${req.params.username}"`);
});

app.post('/users/:username/favorites/:movieTitle', (req, res) => {
  res.send(`POST request: Adding movie "${req.params.movieTitle}" to favorites for user "${req.params.username}"`);
});

app.delete('/users/:username/favorites/:movieTitle', (req, res) => {
  res.send(`DELETE request: Removing movie "${req.params.movieTitle}" from favorites for user "${req.params.username}"`);
});

app.delete('/users/:username', (req, res) => {
  res.send(`DELETE request: Deregistering user "${req.params.username}"`);
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
