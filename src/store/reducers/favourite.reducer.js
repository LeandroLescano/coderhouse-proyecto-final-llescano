import {
  GET_FAVOURITES,
  GET_FAVOURITES_OFFLINE,
} from '../actions/favourites.action';

const initialState = {
  recipes: [],
  recipesOffline: [],
};

const FavouriteReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case GET_FAVOURITES:
      return {
        ...state,
        recipes: payload,
      };
    case GET_FAVOURITES_OFFLINE:
      return {
        ...state,
        recipesOffline: payload,
      };
    default:
      return state;
  }
};

export default FavouriteReducer;
