// Please don't change the pre-written code

const express = require("express");
const server = express();
const path = require('path');

const renderStatic = () => {
  // Write your code here
  //publicPath = path.join(__dirname, 'public');
  server.use(express.static('public'));
};

server.get("/", (req, res) => {
  res.send("get method called!");
});

renderStatic();

module.exports = { renderStatic, server };
