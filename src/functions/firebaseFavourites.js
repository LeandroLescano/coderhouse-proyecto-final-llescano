import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export const addFavourite = async recipe => {
  const uid = await auth().currentUser.uid;
  const favouriteRef = database().ref(`users/${uid}/favourites`);
  favouriteRef.push(recipe);
};

export const removeFavourite = async id => {
  const uid = await auth().currentUser.uid;
  const favouriteRef = database().ref(`users/${uid}/favourites/${id}`);
  favouriteRef.remove();
};
