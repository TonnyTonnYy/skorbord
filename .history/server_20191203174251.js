const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const proxy = require("http-proxy-middleware");

const games = require("./routes/api/games");

const app = express();

app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Mongo connected"))
  .catch(err => console.log(err));

app.use("/", games);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

module.exports = function(app) {
  // add other server routes to path array
  app.use(proxy(["/api/games"], { target: "http://localhost:5000" }));
};
