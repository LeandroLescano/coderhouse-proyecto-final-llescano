import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export const GET_FAVOURITES = 'GET_FAVOURITES';

export const getFavourites = () => {
  return async dispatch => {
    const uid = await auth().currentUser.uid;
    const favouriteRef = database().ref(`users/${uid}/favourites`);
    favouriteRef.on('value', snapshot => {
      const recipeArray = [];
      const recipes = snapshot.val();
      for (const key in recipes) {
        recipeArray.push({...recipes[key], idFirebase: key});
      }
      dispatch({type: GET_FAVOURITES, payload: recipeArray});
    });
  };
};
