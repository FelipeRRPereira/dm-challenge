const axios = require("axios");
const { config } = require("../../config/config.default");

exports.index = async (ingredients) => {
  const res = await axios
    .get(`${config.hostRecipePuppy}?i=${ingredients}`)
    .then((response) => response)
    .catch(() => ({
      message: "Serviço indisponível, tente mais tarde!",
      status: 503,
    }));

  if (res.message) return res;

  if (res.data.results.length === 0) {
    return {
      message: `Nenhuma receita encontrada para os ingredientes ${ingredients}.`,
      status: 200,
    };
  }

  return res ? res.data.results : null;
};
