const { Recipe, Diet } = require("../db");

const postRecipe = async (
  name,
  summary,
  rating,
  healthScore,
  steps,
  diets, // se lo envio por body desde el front y lo relaciona con la tabla intermedia
  image
) => {
  try {
    if (!image)
      image =
        "https://1.bp.blogspot.com/-otqwtLOpwV0/Xym3NGXtoEI/AAAAAAAAiNE/pB8iXR2dHP0ergt-pmVa1LaIZkohhHs2ACLcBGAsYHQ/w410-h307/la%2Bnota%2Buno.jpg";
    let newRecipe = await Recipe.create({
      name,
      summary,
      rating,
      healthScore,
      steps,
      image,
    });

    let dietDB = await Diet.findAll({
      //el tipo de dieta lo creo con lo que ya tengo en mi db
      where: {
        name: diets,
      },
    });

    // console.log(newRecipe);
    // console.log(dietDB);
    await newRecipe.addDiets(dietDB);

    return newRecipe;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { postRecipe };
