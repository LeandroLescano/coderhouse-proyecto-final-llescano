import {Image, ScrollView, Text, TouchableHighlight} from 'react-native';
import React, {useEffect, useState} from 'react';
import {addFavourite, removeFavourite} from '../functions/firebaseFavourites';

import IngredientList from '../components/IngredientList';
import {selectScreen} from '../store/actions/screen.action';
import {styles} from '../styles/RecipeDetail.styles';
import {useDispatch} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const RecipeDetail = () => {
  const [favourite, setFavourite] = useState({isFavourite: false, id: null});
  const recipe = useSelector(state => state.recipes.selected);
  const favourites = useSelector(state => state.favourites.recipes);
  const dispatch = useDispatch();

  useFocusEffect(() => {
    dispatch(selectScreen('Recipe detail'));
  });

  useEffect(() => {
    if (favourites.length > 0) {
      for (let favourite in favourites) {
        if (favourites[favourite].idMeal === recipe.idMeal) {
          setFavourite({
            isFavourite: true,
            id: favourites[favourite].idFirebase,
          });
          return;
        } else {
          setFavourite({isFavourite: false, id: null});
        }
      }
    }
  }, [favourites, recipe]);

  const handleFavourite = () => {
    if (favourite.isFavourite) {
      removeFavourite(favourite.id);
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
          <TouchableHighlight
            style={styles.button}
            onPress={() => handleFavourite()}>
            <Text style={styles.buttonText}>
              {favourite.isFavourite
                ? 'Remove from favourites'
                : 'Add to favourites'}
            </Text>
          </TouchableHighlight>
        </>
      ) : null}
    </ScrollView>
  );
};

export default RecipeDetail;
