import {Image, ScrollView, Text, TouchableHighlight, View} from 'react-native';
import React, {useEffect} from 'react';

import {selectScreen} from '../store/actions/screen.action';
import {styles} from '../styles/RecipeDetail.styles';
import {useDispatch} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const RecipeDetail = () => {
  const recipe = useSelector(state => state.recipes.selected);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(recipe);
  }, [recipe]);

  useFocusEffect(() => {
    dispatch(selectScreen('Recipe detail'));
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {recipe ? (
        <>
          <Image source={{uri: recipe.strMealThumb}} style={styles.image} />
          <Text style={styles.title}>{recipe.strMeal}</Text>
          <Text style={styles.subtitle}>Instructions:</Text>
          <Text style={styles.body}>{recipe.strInstructions}</Text>
          <TouchableHighlight style={styles.button}>
            <Text style={styles.buttonText}>Add to favourites</Text>
          </TouchableHighlight>
        </>
      ) : null}
    </ScrollView>
  );
};

export default RecipeDetail;
