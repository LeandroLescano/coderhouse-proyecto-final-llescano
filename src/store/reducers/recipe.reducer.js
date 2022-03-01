import {
  CLEAR_RECIPES,
  GET_RECIPES,
  SEARCH_RECIPES,
  SELECT_RECIPE,
} from '../actions/recipe.action';

const initialState = {
  recipes: [],
  searchRecipes: [],
  selected: null,
};

const RecipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_RECIPE:
      return {
        ...state,
        selected: action.recipe,
      };
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
      };
    case SEARCH_RECIPES:
      return {
        ...state,
        searchRecipes: action.payload,
      };
    case CLEAR_RECIPES:
      return {
        ...state,
        recipes: [],
      };
    default:
      return state;
  }
};

export default RecipeReducer;
