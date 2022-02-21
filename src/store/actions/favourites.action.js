import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {getFavouritesOff} from '../../functions/offlineFavourites';

export const GET_FAVOURITES = 'GET_FAVOURITES';
export const GET_FAVOURITES_OFFLINE = 'GET_FAVOURITES_OFFLINE';

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

export const getFavouritesOffline = () => {
  return async dispatch => {
    const favourites = await getFavouritesOff();
    dispatch({type: GET_FAVOURITES_OFFLINE, payload: favourites});
  };
};
