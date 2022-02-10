import {GET_CATEGORIES, SELECT_CATEGORY} from '../actions/category.action';

const initialState = {
  categories: [],
  selected: null,
};

const CategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case SELECT_CATEGORY:
      return {
        ...state,
        selected: action.categoryId,
      };
    default:
      return state;
  }
};

export default CategoryReducer;
