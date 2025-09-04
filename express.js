const express = require('express');
const app = express();
app.use(express.json());

// Movies Routes
app.get('/movies', (req, res) => {
  res.send('GET request: Returning all movies');
});

app.get('/movies/:id', (req, res) => {
  res.send(`GET request: Returning movie with ID ${req.params.id}`);
});

app.post('/movies', (req, res) => {
  res.send('POST request: Adding a new movie');
});

app.put('/movies/:id', (req, res) => {
  res.send(`PUT request: Updating movie with ID ${req.params.id}`);
});

app.delete('/movies/:id', (req, res) => {
  res.send(`DELETE request: Deleting movie with ID ${req.params.id}`);
});

// Users Routes
app.get('/users', (req, res) => {
  res.send('GET request: Returning all users');
});

app.get('/users/:id', (req, res) => {
  res.send(`GET request: Returning user with ID ${req.params.id}`);
});

app.post('/users', (req, res) => {
  res.send('POST request: Registering a new user');
});

app.put('/users/:id', (req, res) => {
  res.send(`PUT request: Updating user with ID ${req.params.id}`);
});

app.delete('/users/:id', (req, res) => {
  res.send(`DELETE request: Deleting user with ID ${req.params.id}`);
});

// Server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
