const axios = require("axios");
const { Recipe, Diet } = require("../db");
const { Op } = require("sequelize");
const { API_KEY6 } = process.env;

const getRecipes = async () => {
  try {
    const res = await axios.get(
      ` https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY6}&number=100&addRecipeInformation=true`
    );
    let recipesApi = res.data.results.map((el) => {
      return {
        id: el.id,
        name: el.title,
        diets: el.diets,
        image: el.image,
        rating: el.spoonacularScore,
      };
    });
    let recipesDb = await Recipe.findAll({
      // attributes: [
      //   "id",
      //   "name",
      //   "summary",
      //   "rating",
      //   // "healthScore",
      // ],
      // include: [
      //   {
      //     model: Diet,
      //   },
      // ],

      include: {
        model: Diet,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    let allRecipes = [...recipesDb, ...recipesApi];

    return allRecipes;
  } catch (error) {
    console.log(error);
  }
};

const getByName = async (name) => {
  try {
    let res = await axios.get(
      ` https://api.spoonacular.com/recipes/complexSearch?query=${name}&apiKey=${API_KEY6}&number=100&addRecipeInformation=true`
    );
    let recipesApiName = res.data.results.map((el) => {
      return {
        id: el.id,
        name: el.title,
        diets: el.diets,
        image: el.image,
        rating: el.spoonacularScore,
      };
    });
    let recipesDbName = await Recipe.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
      attributes: [
        "id",
        "name",
        "summary",
        "rating",
        "healthScore",
        "instructions",
      ],
      include: {
        model: Diet,
      },
    });

    let allRecipesName = [...recipesDbName, ...recipesApiName];
    return allRecipesName;
  } catch (error) {
    console.log(error);
  }
};

// const getById = async (id) => {
//   try {
//     if (id.length > 10) {
//       // let resDb = await Recipe.findOne({
//       //   where: {
//       //     id: id,
//       //   },
//       //   attributes: [
//       //     "id",
//       //     "name",
//       //     "summary",
//       //     "rating",
//       //     "healthScore",
//       //     "instructions",
//       //   ],
//       //   include: {
//       //     model: Diet,
//       //   },
//       // });

//       let detailDb = await Recipe.findByPk(id, {
//         include: {
//           model: Diet,
//           attributes: ["name"],
//           through: {
//             attributes: [],
//           },
//         },
//       });
//       // return resDb;
//     } else {
//       const resApi = await axios.get(
//         ` https://api.spoonacular.com/recipes/${id}/information/?apiKey=${API_KEY6}`
//       );

//       let detailApi = {
//         name: resApi.data.title,
//         image: resApi.data.image,
//         dishType: resApi.data.dishTypes,
//         summary: resApi.data.summary,
//         diets: resApi.data.diets,
//         rating: resApi.data.spoonacularScore,
//         healthScore: resApi.data.healthScore,
//         instructions: resApi.data.instructions,
//       };
//       console.log(id + " " + "es el id");

//       // return detailApi;

//       let totalID = [...detailDb, ...detailApi];
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

const getDbbyId = async (id) => {
  try {
    let resDB = await Recipe.findByPk(id, {
      include: {
        model: Diet,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    return resDB;
  } catch (error) {
    console.log(error);
  }
};

const getApiById = async (id) => {
  try {
    let resApi = await axios.get(
      ` https://api.spoonacular.com/recipes/${id}/information/?apiKey=${API_KEY6}`
    );
    if (resApi.data.id) {
      let detailApi = {
        name: resApi.data.title,
        image: resApi.data.image,
        dishType: resApi.data.dishTypes,
        summary: resApi.data.summary,
        diets: resApi.data.diets,
        rating: resApi.data.spoonacularScore,
        healthScore: resApi.data.healthScore,
        instructions: resApi.data.instructions,
      };

      return detailApi;
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getRecipes, getByName, getDbbyId, getApiById };
