import axios from "axios";
export const GET_RECIPES = "GET_RECIPES";
export const GET_RECIPE_BY_NAME = "GET_RECIPE_BY_NAME";
export const FILTER_BY_DIET = "FILTER_BY_DIET";
export const GET_DIETS = "GET_DIETS";
export const GET_DETAIL = "GET_DETAIL";
export const ORDER_BY = "ORDER_BY";
export const POST_RECIPE = "POST_RECIPE";
export const LOADER_TRUE = "LOADER_TRUE";

export const getRecipes = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("https://dashboard.heroku.com/apps/deploy-backend-pi/deploy/github/recipes");
      dispatch({
        type: GET_RECIPES,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
      alert(
        "Your daily points limit of 150 has been reached. Please upgrade your plan to continue using the API."
      );
    }
  };
};

export const getByName = (name) => {
  return async (dispatch) => {
    try {
      const recipe = await axios.get("https://dashboard.heroku.com/apps/deploy-backend-pi/deploy/github/recipes?name=" + name);
      dispatch({
        type: GET_RECIPE_BY_NAME,
        payload: recipe.data,
      });
    } catch (error) {
      console.log(error);
      alert("Recipe not found");
    }
  };
};

export const getDiets = () => {
  return async (dispatch) => {
    try {
      const types = await axios("https://dashboard.heroku.com/apps/deploy-backend-pi/deploy/github/types");
      return dispatch({
        type: GET_DIETS,
        payload: types.data,
      });
    } catch (error) {
      console.log(error);
      alert(
        "Your daily points limit of 150 has been reached. Please upgrade your plan to continue using the API."
      );
    }
  };
};
// export const getDiets = () => {
//   return async (dispatch) => {
//     try {
//       return fetch("/types")
//         .then((res) => res.json())
//         .then((data) => {
//           dispatch({
//             type: GET_DIETS,
//             payload: data,
//           });
//         });
//     } catch (error) {
//       console.log(error);
//       alert(
//         "Your daily points limit of 150 has been reached. Please upgrade your plan to continue using the API."
//       );
//     }
//   };
// };

export const filterByDiets = (payload) => {
  try {
    return {
      type: FILTER_BY_DIET,
      payload,
    };
  } catch (error) {
    console.log(error);
  }
};

export function getDetail(payload) {
  return async (dispatch) => {
    try {
      const res = await axios.get(`https://dashboard.heroku.com/apps/deploy-backend-pi/deploy/github/recipes/${payload}`);

      dispatch({
        type: GET_DETAIL,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function orderBy(payload) {
  return async function (dispatch) {
    try {
      dispatch({
        type: ORDER_BY,
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const createRecipe = (newRecipe) => {
  return async (dispatch) => {
    try {
      const postRecipe = await axios.post("https://dashboard.heroku.com/apps/deploy-backend-pi/deploy/github/recipe", newRecipe);
      console.log(postRecipe);
      return dispatch({
        type: POST_RECIPE,
        payload: postRecipe,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export function trueLoader() {
  return {
    type: LOADER_TRUE,
  };
}
