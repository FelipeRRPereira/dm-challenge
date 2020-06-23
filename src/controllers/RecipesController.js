const RecipePuppyService = require("../services/RecipePuppyService");

exports.index = async (req, res) => {
  const { i } = req.query;
  const ingredients = i ? i.split(",", 3) : [];
  if (ingredients.length === 0)
    return res
      .status(404)
      .json({ message: "Deve ser informado pelo menos um ingrediente!" });

  const recipesPuppy = await RecipePuppyService.index(ingredients.join(","));
  if (recipesPuppy.message)
    return res.status(recipesPuppy.status).json({
      message: recipesPuppy.message,
    });

  res.json({
    keywords: ingredients,
    recipes: {
      title: "",
      ingredients: "",
      link: "",
      gif: "",
    },
  });
};
