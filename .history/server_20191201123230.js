const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const games = require("./routes/api/games");

const app = express();

app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Mongo connected"))
  .catch(err => console.log(err));

app.use("/api/teams", games);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
