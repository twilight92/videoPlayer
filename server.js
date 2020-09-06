// Initialize the app
const express = require("express");
const app = express();
const sassMiddleware = require("node-sass-middleware");
const PORT = 8080;

app.set("views", "./views");
app.set("view engine", "ejs");

// Setup SASS directories
const path = require('path');
app.use(sassMiddleware({
    src: __dirname + '/sass', 
    dest: __dirname + '/public/stylesheets', 
    debug: true, 
    outputStyle: 'compressed' 
  }),
  // The static middleware must come after the sass middleware
  express.static(path.join(__dirname, 'public'))
)

app.get("/", function (req, res) {
  res.render("video");
});

// Listen for incoming requests and serve them.
app.listen(process.env.PORT || PORT);
console.log("Server started on " + PORT);