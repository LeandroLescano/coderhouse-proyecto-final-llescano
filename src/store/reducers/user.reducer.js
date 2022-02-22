import {
  CHANGE_LOGIN_STATUS,
  SET_USER,
  SET_ERROR,
  SET_LOADING,
} from '../actions/user.action';

const initialState = {
  user: {},
  isLogged: false,
  error: null,
  isLoading: false,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case CHANGE_LOGIN_STATUS:
      return {
        ...state,
        isLogged: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export default UserReducer;
