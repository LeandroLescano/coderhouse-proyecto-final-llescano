import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {FlatList} from 'react-native-gesture-handler';
import RecipeItem from '../components/RecipeItem';
import {ToastAndroid, View} from 'react-native';
import {
  getFavourites,
  getFavouritesOffline,
} from '../store/actions/favourites.action';
import {selectRecipe} from '../store/actions/recipe.action';
import {selectScreen} from '../store/actions/screen.action';
import {useFocusEffect} from '@react-navigation/native';
import {useNetInfo} from '@react-native-community/netinfo';

const Favourites = ({navigation}) => {
  const dispatch = useDispatch();
  const isConnected = useNetInfo().isConnected;
  const favourites = useSelector(state => state.favourites.recipes);
  const favouritesOffline = useSelector(
    state => state.favourites.recipesOffline,
  );

  useFocusEffect(() => {
    dispatch(selectScreen('Favourites'));
    if (favourites && favourites.length === 0) {
      if (isConnected === true) {
        dispatch(getFavourites());
      } else if (isConnected === false) {
        dispatch(getFavouritesOffline());
      }
    }
  });

  useEffect(() => {
    if (isConnected && favourites && favourites.length === 0) {
      dispatch(getFavourites());
    }
    if (isConnected === false) {
      console.log('offline');
      ToastAndroid.show(
        'No internet connection. Only offline recipes in favorites section available',
        ToastAndroid.LONG,
      );
    }
  }, [isConnected]);

  const handlePress = recipe => {
    dispatch(selectRecipe(recipe));
    dispatch(getFavouritesOffline());
    navigation.navigate('RecipeDetail');
  };

  return (
    <View>
      <FlatList
        data={
          favourites && favourites.length > 0 ? favourites : favouritesOffline
        }
        keyExtractor={item => item.idMeal}
        renderItem={({item}) => (
          <RecipeItem item={item} onPress={() => handlePress(item)} />
        )}
      />
    </View>
  );
};

export default Favourites;
