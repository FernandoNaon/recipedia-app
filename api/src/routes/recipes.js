const { Router } = require("express");
const router = Router();
const {
  getRecipes,
  getByName,
  getDbbyId,
  getApiById,
} = require("../Controllers/RecipesController");

router.get("/", async (req, res, next) => {
  const { name } = req.query;
  try {
    if (name) {
      const recipeByName = await getByName(name);

      getByName.length
        ? res.status(200).json(recipeByName)
        : res.status(404).send("Recipe not found");
    } else {
      const allRecipes = await getRecipes();

      res.status(200).json(allRecipes);
    }
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    if (id.length > 7) {
      const dbId = await getDbbyId(id);
      res.status(200).json(dbId);
    } else if (id.length < 7) {
      const apiId = await getApiById(id);
      res.status(200).json(apiId);
    } else {
      res.status(404).send("Recipe not found");
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
