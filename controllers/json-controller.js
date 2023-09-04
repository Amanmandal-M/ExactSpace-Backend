// Controller for rendering the 'form' view
module.exports.getController = (req, res, next) => {
  try {
    res.render("form"); // Render the 'form' view
  } catch (error) {
    // If an error occurs, pass it to the error handling middleware
    next(error);
  }
};

// Function to check if a given text is valid JSON
const isJSON = (text) => {
  try {
    JSON.parse(text);
    return true;
  } catch (error) {
    return false;
  }
};

// Controller for handling form submission and JSON validation
module.exports.postController = (req, res, next) => {
  try {
    const submittedJson = req.body.json;

    // Check if submitted JSON is empty or not valid
    if (!submittedJson || !isJSON(submittedJson)) {
      const status = 400;
      const message = "Invalid JSON data";
      return res.status(status).render("error", { status, message });
    }

    res.render("jsonPage", { json: submittedJson }); // Render 'jsonPage' view
  } catch (error) {
    // If an error occurs, pass it to the error handling middleware
    next(error);
  }
};
