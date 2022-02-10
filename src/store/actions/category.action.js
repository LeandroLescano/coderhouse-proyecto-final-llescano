import {API_ALL_CATEGORIES} from '../../utils/constants/api';

export const SELECT_CATEGORY = 'SELECT_CATEGORY';
export const GET_CATEGORIES = 'GET_CATEGORIES';

export const selectCategory = id => ({
  type: SELECT_CATEGORY,
  categoryId: id,
});

export const getCategories = () => {
  return async dispatch => {
    try {
      const response = await fetch(API_ALL_CATEGORIES, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();
      const categories = result.categories;
      dispatch({
        type: GET_CATEGORIES,
        payload: categories,
      });
    } catch (error) {
      console.warn(error.message);
    }
  };
};
