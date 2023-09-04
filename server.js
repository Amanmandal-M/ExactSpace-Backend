const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
require('dotenv').config(); 

const app = express();

// Routes
const { jsonRouter } = require("./routes/json-routes");
const { handleError } = require("./middlewares/errorMiddleware");

// Middleware to parse incoming JSON requests
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// CORS middleware to handle Cross-Origin Resource Sharing
app.use(cors());

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Include your routes
app.use(jsonRouter);

// Include the error handling middleware at the end
app.use(handleError);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
