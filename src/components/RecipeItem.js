import {ImageBackground, Text, View} from 'react-native';

import React from 'react';
import {styles} from '../styles/RecipeItem';

const RecipeItem = ({item}) => {
  // TODO Ver de sacar styles.item para que estén las imagenes todas
  return (
    <View style={styles.item}>
      <ImageBackground
        source={{uri: item.strMealThumb}}
        style={styles.imageContainer}
        imageStyle={styles.image}
        resizeMode="cover">
        <Text style={styles.title}>{item.strMeal}</Text>
      </ImageBackground>
    </View>
  );
};

export default RecipeItem;
