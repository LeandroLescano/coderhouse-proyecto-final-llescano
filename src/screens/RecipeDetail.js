import {Image, ScrollView, Text, TouchableHighlight, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {addFavourite, removeFavourite} from '../functions/firebaseFavourites';
import {
  addFavouriteOffline,
  removeFavouriteOffline,
} from '../functions/offlineFavourites';
import {useDispatch, useSelector} from 'react-redux';

import IngredientList from '../components/IngredientList';
import {getFavouritesOffline} from '../store/actions/favourites.action';
import {selectScreen} from '../store/actions/screen.action';
import {styles} from '../styles/RecipeDetail.styles';
import {useNetInfo} from '@react-native-community/netinfo';

const RecipeDetail = () => {
  const [favourite, setFavourite] = useState({
    isFavourite: false,
    id: null,
    isOffline: false,
  });
  const isConnected = useNetInfo().isConnected;
  const recipe = useSelector(state => state.recipes.selected);
  const favourites = useSelector(state => state.favourites.recipes);
  const favouritesOffline = useSelector(
    state => state.favourites.recipesOffline,
  );
  const dispatch = useDispatch();

  const handleOffline = () => {
    if (!favourite.isOffline) {
      addFavouriteOffline(recipe);
      setFavourite({...favourite, isOffline: true});
    } else {
      removeFromOfflineStorage();
    }
  };

  const removeFromOfflineStorage = () => {
    removeFavouriteOffline(recipe.idFirebase).then(() => {
      dispatch(getFavouritesOffline());
      setFavourite(prevState => ({...prevState, isOffline: false}));
    });
  };

  useEffect(() => {
    if (recipe) {
      dispatch(selectScreen(recipe.strMeal));
    }
    if (favourites && favourites.length > 0 && recipe) {
      let isFavorite = false;
      for (let favourite in favourites) {
        if (favourites[favourite].idMeal === recipe.idMeal) {
          isFavorite = true;
          setFavourite(prevState => ({
            ...prevState,
            isFavourite: true,
            id: favourites[favourite].idFirebase,
          }));
          return;
        }
      }
      if (!isFavorite) {
        setFavourite(prevState => ({
          ...prevState,
          isFavourite: false,
          id: null,
        }));
      }
    }
  }, [favourites, recipe]);

  useEffect(() => {
    let isFavorite = false;
    for (let fav in favouritesOffline) {
      if (favouritesOffline[fav].idMeal === recipe.idMeal) {
        isFavorite = true;
        setFavourite(prevState => ({
          ...prevState,
          isOffline: true,
          isFavourite: true,
        }));
        return;
      }
    }
    if (!isFavorite) {
      setFavourite(prevState => ({
        ...prevState,
        isOffline: false,
      }));
    }
  }, [favouritesOffline, recipe]);

  const handleFavourite = () => {
    if (favourite.isFavourite) {
      setFavourite(prevState => ({
        ...prevState,
        isFavourite: false,
      }));
      removeFavourite(favourite.id);
      removeFromOfflineStorage();
    } else {
      addFavourite(recipe);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {recipe ? (
        <>
          <Image source={{uri: recipe.strMealThumb}} style={styles.image} />
          <Text style={styles.title}>{recipe.strMeal}</Text>
          <Text style={styles.subtitle}>Ingredients:</Text>
          <IngredientList recipe={recipe} />
          <Text style={styles.subtitle}>Instructions:</Text>
          <Text style={styles.body}>{recipe.strInstructions}</Text>
          <View style={styles.buttonsContainer}>
            {isConnected ? (
              <TouchableHighlight
                style={styles.button}
                onPress={() => handleFavourite()}>
                <Text style={styles.buttonText}>
                  {favourite.isFavourite
                    ? 'Remove from\n favourites'
                    : 'Add to\n favourites'}
                </Text>
              </TouchableHighlight>
            ) : null}
            {favourite.isFavourite ? (
              <TouchableHighlight
                style={[styles.button, {marginLeft: isConnected ? 10 : 0}]}
                onPress={() => handleOffline()}>
                <Text style={styles.buttonText}>
                  {favourite.isOffline
                    ? 'Remove from\n offline storage'
                    : 'Save to\n offline storage'}
                </Text>
              </TouchableHighlight>
            ) : null}
          </View>
        </>
      ) : null}
    </ScrollView>
  );
};

export default RecipeDetail;
