import {CHANGE_LOGIN_STATUS, SET_USER} from '../actions/user.action';

const initialState = {
  user: {},
  isLogged: false,
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
    default:
      return state;
  }
};

export default UserReducer;
