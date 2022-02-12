import {SELECT_SCREEN} from '../actions/screen.action';

const initialState = {
  current: 'Home',
};

const ScreenReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_SCREEN:
      return {
        ...state,
        current: action.payload,
      };
    default:
      return state;
  }
};

export default ScreenReducer;
