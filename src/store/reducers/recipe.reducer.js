import {GET_RECIPES, SELECT_RECIPE} from '../actions/recipe.action';

const initialState = {
  recipes: [],
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
    default:
      return state;
  }
};

export default RecipeReducer;
