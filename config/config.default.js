require("dotenv").config();

const { PORT = "3333", HOST = "0.0.0.0" } = process.env;

const config = {
  port: PORT,
  host: HOST,
};

module.exports = { config };
