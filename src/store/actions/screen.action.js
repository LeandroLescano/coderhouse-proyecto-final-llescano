export const SELECT_SCREEN = 'SELECT_SCREEN';

export const selectScreen = name => ({
  type: SELECT_SCREEN,
  payload: name,
});
