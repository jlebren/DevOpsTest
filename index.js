// Import the express module
const express = require('express');

// Create an instance of an Express application
const app = express();

// Define a route for the root URL ("/")
app.get('/', (req, res) => {
    res.send('Hello, World!');
  });

// Start the server on port 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});