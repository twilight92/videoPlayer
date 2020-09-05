const express = require("express");
const app = express();
const router = require("./router/main")(app);
const PORT = 8080;

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

const server = app.listen(PORT, function () {
  console.log(`Express server has started on port${PORT}`);
});

app.use(express.static('public'));