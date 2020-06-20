const express = require("express");
const { config } = require("./config/config.default");

const { port, host } = config;

const app = express();

app.get("/", (req, res) => {
  res.send("Setup");
});

app.listen(port, host);
