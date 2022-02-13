import {GET_FAVOURITES} from '../actions/favourites.action';

const initialState = {
  recipes: [],
};

const FavouriteReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case GET_FAVOURITES:
      return {
        ...state,
        recipes: payload,
      };
    default:
      return state;
  }
};

export default FavouriteReducer;
