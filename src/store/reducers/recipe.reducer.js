import {SELECT_RECIPE} from '../actions/recipe.action';

const initialState = {
  selected: null,
};

const RecipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_RECIPE:
      return {
        ...state,
        selected: action.recipe,
      };
    default:
      return state;
  }
};

export default RecipeReducer;
