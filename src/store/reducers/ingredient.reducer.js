import {
  GET_INGREDIENTS,
  SELECT_INGREDIENT,
} from '../actions/ingredient.action ';

const initialState = {
  ingredients: [],
  selected: null,
};

const IngredientReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS:
      return {
        ...state,
        ingredients: action.payload,
      };
    case SELECT_INGREDIENT:
      return {
        ...state,
        selected: action.ingredientId,
      };
    default:
      return state;
  }
};

export default IngredientReducer;
