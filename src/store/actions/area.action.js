import {API_ALL_AREAS} from '../../utils/constants/api';

export const SELECT_AREA = 'SELECT_AREA';
export const GET_AREAS = 'GET_AREAS';

export const selectArea = id => ({
  type: SELECT_AREA,
  areaId: id,
});

export const getAreas = () => {
  return async dispatch => {
    try {
      const response = await fetch(API_ALL_AREAS, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();
      const areas = result.meals;
      dispatch({
        type: GET_AREAS,
        payload: areas,
      });
    } catch (error) {
      console.warn(error.message);
    }
  };
};
