const express = require("express");
const hbs = require("hbs");
require("dotenv").config();
const app = express();
const port = process.env.PORT;

//Handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials", function (err) {});

//Server content static
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    name: "edwin",
    test: "web server",
  });
});

app.get("/generic", (req, res) => {
  res.sendFile(__dirname + "/public/generic.html");
});

app.get("/elements", (req, res) => {
  res.sendFile(__dirname + "/public/elements.html");
});

app.get("/hello-world", (req, res) => {
  res.send("Hello World!");
});

app.get("*", (req, res) => {
  res.send("404 | Page not fund");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
