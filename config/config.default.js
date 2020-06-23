require("dotenv").config();

const {
  PORT = 3333,
  HOST = "0.0.0.0",
  HOST_RECIPE_PUPPY = "http://www.recipepuppy.com/api/",
  HOST_GIPHY = "https://api.giphy.com/v1/gifs/search",
  API_KEY_GIPHY,
} = process.env;

const config = {
  port: PORT,
  host: HOST,
  hostRecipePuppy: HOST_RECIPE_PUPPY,
  hostGiphy: HOST_GIPHY,
  apiKeyGiphy: API_KEY_GIPHY,
};

module.exports = { config };
