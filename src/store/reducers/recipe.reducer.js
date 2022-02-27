import {
  GET_RECIPES,
  SEARCH_RECIPES,
  SELECT_RECIPE,
  UPDATE_LOADING,
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
    default:
      return state;
  }
};

export default RecipeReducer;
