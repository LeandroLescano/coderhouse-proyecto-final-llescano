import AsyncStorage from '@react-native-async-storage/async-storage';

export const addFavouriteOffline = async recipe => {
  try {
    const favourites = await AsyncStorage.getItem('favourites');
    const parsedFavourites = JSON.parse(favourites);
    recipe = {...recipe, offline: true};
    if (parsedFavourites) {
      parsedFavourites.push(recipe);
      await AsyncStorage.setItem(
        'favourites',
        JSON.stringify(parsedFavourites),
      );
    } else {
      await AsyncStorage.setItem('favourites', JSON.stringify([recipe]));
    }
  } catch (error) {
    console.log(error);
  }
};

export const removeFavouriteOffline = async id => {
  try {
    const favourites = await AsyncStorage.getItem('favourites');
    const parsedFavourites = JSON.parse(favourites);
    if (parsedFavourites) {
      const filteredFavourites = parsedFavourites.filter(
        favourite => favourite.idFirebase !== id,
      );
      await AsyncStorage.setItem(
        'favourites',
        JSON.stringify(filteredFavourites),
      );
    }
  } catch (error) {
    console.log(error);
  }
};

export const getFavouritesOff = async () => {
  try {
    const favourites = await AsyncStorage.getItem('favourites');
    const parsedFavourites = JSON.parse(favourites);
    return parsedFavourites;
  } catch (error) {
    console.log(error);
  }
};
