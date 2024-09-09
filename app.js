// Import the express module
const express = require('express');

// Create an instance of an Express application
const app = express();

// Define the port the application will run on


// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello World! from jasun');
});

// Make the application listen on the defined port
app.listen(9000, () => {

console.log("Server is running 9000");
});
  
