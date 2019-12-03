import axios from "axios";
const path = require("path");

export default axios.create({
  baseURL: "http://localhost:5000/api/games",
  responseType: "json"
});
