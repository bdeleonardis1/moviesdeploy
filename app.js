var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
var path = require("path");

var getRows = require("./google");
//var auth = getAuth();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "build")));

app.get("/getrows", (req, res) => {
  getRows(res);
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

<<<<<<< HEAD
port = process.env.PORT || 8000;

=======
var port = process.env.PORT || 8000;
>>>>>>> bf1d545fb8639ece769bfe7b25b652902b0c4a9f
app.listen(port, () => {
  console.log("Listening on port", port);
});
