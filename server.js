const express = require("express");
const app = express();
const router = require("./router/main")(app);

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

const server = app.listen(8080, function () {
  console.log("Express server has started on port 8080");
});

app.use(express.static('public'));