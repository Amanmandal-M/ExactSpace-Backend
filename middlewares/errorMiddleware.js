module.exports.handleError = (err, req, res, next) => {
  try {
      console.error(err); // Log the error for debugging
      const status = err.status || 500;
      const message = status === 500 ? "Internal Server Error" : err.message;
      res.status(status).render("error", { status, message });
  } catch (error) {
      // If an error occurs while rendering the error page
      console.error("An error occurred while rendering the error page:", error);
      res.status(500).send("An error occurred on the server.");
  }
};
