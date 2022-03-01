import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export const addFavourite = async recipe => {
  const user = await auth().currentUser;
  if (user) {
    const uid = user.uid;
    const favouriteRef = database().ref(`users/${uid}/favourites`);
    favouriteRef.push(recipe);
  }
};

export const removeFavourite = async id => {
  const user = await auth().currentUser;
  if (user) {
    const uid = user.uid;
    const favouriteRef = database().ref(`users/${uid}/favourites/${id}`);
    favouriteRef.remove();
  }
};
