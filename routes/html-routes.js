// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the cellars page
    if (req.user) {
      res.redirect("/cellars");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  // Send client the 'Login' html page
  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/cellars");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/cellars", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/cellars.html"));
  });
};

//sends client the 'Wine Search' html page
app.get("/search", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/search.html")); 
}); 
