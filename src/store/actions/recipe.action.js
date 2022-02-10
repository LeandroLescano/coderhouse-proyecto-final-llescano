import {API_RECIPES_BY_ID} from '../../utils/constants/api';

export const SELECT_RECIPE = 'SELECT_RECIPE';

export const selectRecipe = recipe => ({
  type: SELECT_RECIPE,
  recipe,
});
