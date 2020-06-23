const axios = require("axios");
const { config } = require("../../config/config.default");

exports.index = async (title) => {
  const res = await axios
    .get(`${config.hostGiphy}?api_key=${config.apiKeyGiphy}&q=${title}&limit=1`)
    .then((response) => response)
    .catch(() => ({
      message: "Serviço indisponível, tente mais tarde!",
      status: 503,
    }));

  if (res.message) return res;

  if (res.data.data.length === 0) {
    return {
      message: `Nenhum gif encontrada para este titulo da receita ${title}.`,
      status: 200,
    };
  }

  return res ? res.data.data[0].url : null;
};
