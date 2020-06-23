const RecipePuppyService = require("../services/RecipePuppyService");
const GiphyService = require("../services/GiphyService");

const { forEachAsync } = require("../../libs/util");

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

  const recipes = [];
  await forEachAsync(recipesPuppy, async (recipe) => {
    const ingredients = recipe.ingredients
      .match(/(?=\S)[^,]+?(?=\s*(,|$))/g)
      .sort();

    const gif = await GiphyService.index(recipe.title);
    if (gif.message)
      return res.status(gif.status).json({
        message: gif.message,
      });

    recipes.push({
      title: recipe.title,
      ingredients,
      link: recipe.href,
      gif,
    });
  });

  res.json({
    keywords: ingredients,
    recipes,
  });
};
