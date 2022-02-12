import {
  API_RECIPES_BY_AREA,
  API_RECIPES_BY_CATEGORY,
  API_RECIPES_BY_INGREDIENT,
} from '../../utils/constants/api';
import {AREAS, CATEGORIES, INGREDIENTS} from '../../utils/constants/constans';

export const SELECT_RECIPE = 'SELECT_RECIPE';
export const GET_RECIPES = 'GET_RECIPES';

export const selectRecipe = recipe => ({
  type: SELECT_RECIPE,
  recipe,
});

export const getRecipes = (type, filter) => {
  return async dispatch => {
    try {
      let api;
      switch (type) {
        case CATEGORIES:
          api = `${API_RECIPES_BY_CATEGORY}${filter}`;
          break;
        case INGREDIENTS:
          api = `${API_RECIPES_BY_INGREDIENT}${filter}`;
          break;
        case AREAS:
          api = `${API_RECIPES_BY_AREA}${filter}`;
          break;
        default:
          break;
      }
      const response = await fetch(api, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();
      const recipes = result.meals;
      dispatch({
        type: GET_RECIPES,
        payload: recipes,
      });
    } catch (error) {
      console.warn(error.message);
    }
  };
};
