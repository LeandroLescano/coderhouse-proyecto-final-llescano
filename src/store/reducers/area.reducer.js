import {GET_AREAS, SELECT_AREA} from '../actions/area.action';

const initialState = {
  areas: [],
  selected: null,
};

const AreaReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_AREAS:
      return {
        ...state,
        areas: action.payload,
      };
    case SELECT_AREA:
      return {
        ...state,
        selected: action.areaId,
      };
    default:
      return state;
  }
};

export default AreaReducer;
