// Initialize the app
const express = require("express");
const app = express();
const PORT = 8080;

app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/public", express.static("public"));

app.get("/", function (req, res) {
  res.render("video");
});

// Listen for incoming requests and serve them.
app.listen(process.env.PORT || PORT);
console.log("Server started on " + PORT);