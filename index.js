// Import required modules
const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 3000; // You can change this to any available port

// Use Morgan middleware to log all incoming requests
app.use(morgan('common'));

// Serve static files from the "public" folder
app.use(express.static('public'));

// GET route for "/movies" — returns top 10 movies as JSON
app.get('/movies', (req, res) => {
  res.json([
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Dark Knight', year: 2008 },
    { title: 'Pulp Fiction', year: 1994 },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    { title: 'Fight Club', year: 1999 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Lord of the Rings: The Return of the King', year: 2003 }
  ]);
});

// GET route for "/" — returns a default welcome message
app.get('/', (req, res) => {
  res.send('🎬 Welcome to the Movie API! Explore /movies or /documentation.html');
});

// Error-handling middleware — logs errors to the terminal
app.use((err, req, res, next) => {
  console.error('🔥 Application error:', err.stack);
  res.status(500).send('Something went wrong on the server.');
});

// Start the server
app.listen(port, () => {
  console.log(`✅ Server is running at http://localhost:${port}`);
});
