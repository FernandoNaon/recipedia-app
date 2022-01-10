const { Router } = require("express");
const router = Router();
const { postRecipe } = require("../Controllers/RecipeControllers");

router.post("/", async function (req, res, next) {
  const { name, summary, rating, healthScore, instructions, diets, image } =
    req.body;
  try {
    const addRecipe = await postRecipe(
      name,
      summary,
      rating,
      healthScore,
      instructions,
      diets,
      image
    );
    res.status(200).send(addRecipe);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
