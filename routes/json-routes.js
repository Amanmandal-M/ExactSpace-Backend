// Import the required packages and controllers
const express = require('express');
const { getController, postController } = require('../controllers/json-controller');

// Create a router instance
const jsonRouter = express.Router();

// Define routes
jsonRouter.get('/', getController); // Handle GET requests for '/'
jsonRouter.post('/submit', postController); // Handle POST requests for '/submit'

// Export the router
module.exports = { jsonRouter };
