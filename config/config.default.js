require("dotenv").config();

const {
  PORT = "3333",
  HOST = "0.0.0.0",
  HOST_RECIPE_PUPPY = "http://www.recipepuppy.com/api/",
} = process.env;

const config = {
  port: PORT,
  host: HOST,
  hostRecipePuppy: HOST_RECIPE_PUPPY,
};

module.exports = { config };
