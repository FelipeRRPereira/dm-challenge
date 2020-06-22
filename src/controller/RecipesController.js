exports.index = async (req, res) => {
  const { i } = req.query;
  const ingredients = i ? i.split(",", 3) : [];
  if (ingredients.length === 0)
    return res
      .status(404)
      .json({ erro: "Deve retornar pelo menos um ingrediente!" });

  res.json({ keywords: ingredients });
};
