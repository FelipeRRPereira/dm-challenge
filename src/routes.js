const express = require("express");
const routes = express.Router();

const RecipesController = require("./controller/RecipesController");

routes
  .get("/", async (req, res) => {
    res.json({ message: "Servidor funcionado!" });
  })
  .get("/recipes", RecipesController.index);

module.exports = routes;
