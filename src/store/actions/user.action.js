import auth from '@react-native-firebase/auth';

export const SET_USER = 'SET_USER';
export const CHANGE_LOGIN_STATUS = 'CHANGE_LOGIN_STATUS';

export const changeLoginStatus = val => ({
  type: CHANGE_LOGIN_STATUS,
  payload: val,
});

export const setUser = user => ({
  type: SET_USER,
  payload: user,
});

export const signIn = (email, password) => async dispatch => {
  try {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        dispatch(changeLoginStatus(true));
      })
      .catch(error => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
};

export const logIn = (email, password) => async dispatch => {
  try {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        dispatch(changeLoginStatus(true));
      })
      .catch(error => {
        console.log(error);
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
