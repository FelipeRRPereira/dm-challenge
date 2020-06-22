const express = require("express");
const { config } = require("../config/config.default");
const route = require("./routes");

const app = express();

app.use(express.json());
app.use(route);
app.set("config", config);

module.exports = app;
