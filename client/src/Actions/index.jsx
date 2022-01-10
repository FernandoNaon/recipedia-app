import axios from "axios";
export const GET_RECIPES = "GET_RECIPES";
export const GET_RECIPE_BY_NAME = "GET_RECIPE_BY_NAME";
export const FILTER_BY_DIET = "FILTER_BY_DIET";
export const GET_DIETS = "GET_DIETS";
export const GET_DETAIL = "GET_DETAIL";
export const ORDER_BY = "ORDER_BY";
export const POST_RECIPE = "POST_RECIPE";
export const LOADER_TRUE = "LOADER_TRUE";
export const LOADER_FALSE = "LOADER_FALSE";

export const getRecipes = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:3001/recipes");
      dispatch({
        type: "GET_RECIPES",
        payload: res.data,
      });
    } catch (error) {
      console.log("getRecipes fallo");
    }
  };
};

export const getByName = (name) => {
  return async (dispatch) => {
    try {
      const recipe = await axios.get(
        "http://localhost:3001/recipes?name=" + name
      );
      dispatch({
        type: "GET_RECIPE_BY_NAME",
        payload: recipe.data,
      });
    } catch (err) {
      console.log(err);
      alert("Nombre de receta incorrecto");
    }
  };
};

export const getDiets = () => {
  return async (dispatch) => {
    try {
      const types = await axios("http://localhost:3001/types");
      return dispatch({
        type: "GET_DIETS",
        payload: types.data,
      });
    } catch (error) {
      console.log("error");
    }
  };
};
export const filterByDiets = (payload) => {
  //Por que no tiene dispatch?
  try {
    return {
      type: "FILTER_BY_DIET",
      payload,
    };
  } catch (error) {
    console.log("Fallo filterByDiet");
  }
};

export function getDetail(payload) {
  return async (dispatch) => {
    try {
      const res = await axios.get(`http://localhost:3001/recipes/${payload}`);
      dispatch({
        type: "GET_DETAIL",
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export function orderBy(payload) {
  return async function (dispatch) {
    try {
      dispatch({
        type: "ORDER_BY",
        payload,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export const createRecipe = (newRecipe) => {
  return async (dispatch) => {
    try {
      const postRecipe = await axios.post(
        "http://localhost:3001/recipe",
        newRecipe
      );
      console.log(postRecipe);
      return dispatch({
        type: "POST_RECIPE",
        payload: postRecipe,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export function trueLoader() {
  return {
    type: "LOADER_TRUE",
  };
}

export function falseLoader() {
  return {
    type: "LOADER_FALSE",
  };
}
