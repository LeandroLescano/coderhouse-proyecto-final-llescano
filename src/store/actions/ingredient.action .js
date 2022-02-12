import {API_ALL_INGREDIENTS} from '../../utils/constants/api';

export const SELECT_INGREDIENT = 'SELECT_INGREDIENT';
export const GET_INGREDIENTS = 'GET_INGREDIENTS';

export const selectIngredient = id => ({
  type: SELECT_INGREDIENT,
  ingredientId: id,
});

export const getIngredients = () => {
  return async dispatch => {
    try {
      const response = await fetch(API_ALL_INGREDIENTS, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();
      const ingredients = result.meals;
      dispatch({
        type: GET_INGREDIENTS,
        payload: ingredients,
      });
    } catch (error) {
      console.warn(error.message);
    }
  };
};
