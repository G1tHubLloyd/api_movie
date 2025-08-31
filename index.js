// Require necessary modules
const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 3000; // You can change this if needed

// Use Morgan to log all requests
app.use(morgan('common'));

// Serve static files from the "public" folder
app.use(express.static('public'));

// GET route for "/movies"
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

// GET route for "/"
app.get('/', (req, res) => {
  res.send('Welcome to my movie API 🎬');
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error('Application error:', err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
