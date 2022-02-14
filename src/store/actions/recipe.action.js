import {
  API_RECIPES_BY_AREA,
  API_RECIPES_BY_CATEGORY,
  API_RECIPES_BY_ID,
  API_RECIPES_BY_INGREDIENT,
  API_RECIPES_BY_SEARCH,
} from '../../utils/constants/api';
import {AREAS, CATEGORIES, INGREDIENTS} from '../../utils/constants/constans';

export const SELECT_RECIPE = 'SELECT_RECIPE';
export const GET_RECIPES = 'GET_RECIPES';
export const SEARCH_RECIPES = 'SEARCH_RECIPES';

export const selectRecipe = (recipe, id) => {
  if (recipe) {
    return {
      type: SELECT_RECIPE,
      recipe,
    };
  } else {
    return async dispatch => {
      const response = await fetch(API_RECIPES_BY_ID + id);
      const data = await response.json();
      dispatch({
        type: SELECT_RECIPE,
        recipe: data.meals[0],
      });
    };
  }
};

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

export const searchRecipes = searchText => {
  return async dispatch => {
    try {
      const response = await fetch(API_RECIPES_BY_SEARCH + searchText);
      const data = await response.json();
      console.log(data);
      dispatch({
        type: SEARCH_RECIPES,
        payload: data.meals,
      });
    } catch (error) {
      console.warn(error.message);
    }
  };
};

export const cleanRecipes = () => {
  return {
    type: GET_RECIPES,
    payload: [],
  };
};
