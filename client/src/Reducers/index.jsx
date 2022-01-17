import {
  GET_RECIPES,
  GET_RECIPE_BY_NAME,
  GET_DIETS,
  FILTER_BY_DIET,
  GET_DETAIL,
  ORDER_BY,
  POST_RECIPE,
  LOADER_TRUE,
} from "../Actions/index";

const initialState = {
  recipes: [],
  recipesCopy: [],
  diets: [],
  detail: [],
  loader: true,
  error: "",
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        recipesCopy: action.payload,
        loader: false,
      };
    case GET_RECIPE_BY_NAME:
      return {
        ...state,
        recipes: action.payload,
        loader: false,
      };

    case GET_DIETS:
      return {
        ...state,
        diets: action.payload,
        loader: false,
      };
    case FILTER_BY_DIET:
      let recipesCopy = state.recipesCopy;
      let filteredDiets =
        action.payload === "all"
          ? recipesCopy
          : recipesCopy.filter(
              (el) =>
                el.diets.includes(action.payload) ||
                el.diets.map((e) => e.name).includes(action.payload)
            );
      return {
        ...state,
        recipes: filteredDiets,
      };
    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };

    case ORDER_BY:
      let sortRecipes;
      if (action.payload === "abc-asc") {
        sortRecipes = state.recipes.sort(function (a, b) {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          return 0;
        });
      }
      if (action.payload === "abc-des") {
        sortRecipes = state.recipes.sort(function (a, b) {
          if (a.name > b.name) {
            return -1;
          }
          if (a.name < b.name) {
            return 1;
          }
          return 0;
        });
      }
      if (action.payload === "score-asc") {
        sortRecipes = state.recipes.sort(function (a, b) {
          if (a.rating > b.rating) {
            return -1;
          }
          if (a.ratings < b.ratings) {
            return 1;
          }
          return 0;
        });
      }
      if (action.payload === "score-des") {
        sortRecipes = state.recipes.sort(function (a, b) {
          if (a.rating > b.rating) {
            return 1;
          }
          if (a.rating < b.rating) {
            return -1;
          }
          return 0;
        });
      }
      return {
        ...state,
        recipes: sortRecipes,
      };
    case POST_RECIPE:
      return {
        ...state,
      };
    case LOADER_TRUE:
      return {
        ...state,
        loader: true,
      };

    default:
      return state;
  }
}

export default rootReducer;
