import auth from '@react-native-firebase/auth';

export const SET_USER = 'SET_USER';
export const CHANGE_LOGIN_STATUS = 'CHANGE_LOGIN_STATUS';
export const SET_ERROR = 'SET_ERROR';
export const SET_LOADING = 'SET_LOADING';

export const changeLoginStatus = val => ({
  type: CHANGE_LOGIN_STATUS,
  payload: val,
});

export const setUser = user => ({
  type: SET_USER,
  payload: user,
});

export const setError = error => ({
  type: SET_ERROR,
  payload: error,
});

export const signUp = (email, password) => async dispatch => {
  try {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        dispatch(changeLoginStatus(true));
      })
      .catch(error => {
        dispatch(
          setError(
            error.message.substring(
              error.message.indexOf(']') + 2,
              error.message.indexOf('.'),
            ),
          ),
        );
        console.log({error});
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  } catch (error) {
    console.log(error);
  }
};

export const setLoading = val => ({
  type: SET_LOADING,
  payload: val,
});

export const logIn = (email, password) => async dispatch => {
  try {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        dispatch(changeLoginStatus(true));
      })
      .catch(error => {
        dispatch(
          setError(
            error.message.substring(
              error.message.indexOf(']') + 2,
              error.message.indexOf('.'),
            ),
          ),
        );
        console.log({error});
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  } catch (error) {
    console.log(error);
  }
};

export const logOut = () => async dispatch => {
  try {
    auth()
      .signOut()
      .then(() => {
        dispatch(changeLoginStatus(false));
      })
      .catch(error => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
};
