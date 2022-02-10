import {Image, ScrollView, Text, TouchableHighlight} from 'react-native';

import React from 'react';
import {styles} from '../styles/RecipeDetail.styles';
import {useSelector} from 'react-redux';

const RecipeDetail = () => {
  const recipe = useSelector(state => state.recipes.selected);

  return (
    <ScrollView style={{padding: 10}}>
      <Image source={{uri: recipe.strMealThumb}} style={styles.image} />
      <Text style={styles.title}>{recipe.strMeal}</Text>
      <Text style={styles.subtitle}>Instructions:</Text>
      <Text>{recipe.strInstructions}</Text>
      <TouchableHighlight style={styles.button}>
        <Text style={styles.buttonText}>Add to favourites</Text>
      </TouchableHighlight>
    </ScrollView>
  );
};

export default RecipeDetail;
