import {ImageBackground, Pressable, Text, View} from 'react-native';

import React from 'react';
import {styles} from '../styles/RecipeItem';
import {useState} from 'react';

const RecipeItem = ({item, onPress}) => {
  const [isPressed, setIsPressed] = useState(false);

  // TODO Ver de sacar styles.item para que estén las imagenes todas
  return (
    <Pressable
      onPress={() => onPress()}
      onPressIn={() => {
        setIsPressed(true);
      }}
      onPressOut={() => {
        setIsPressed(false);
      }}
      style={isPressed ? styles.itemPressed : styles.item}>
      <ImageBackground
        source={{uri: item.strMealThumb}}
        style={styles.imageContainer}
        imageStyle={isPressed ? styles.imagePressed : styles.image}
        resizeMode="cover">
        <Text style={styles.title}>{item.strMeal}</Text>
      </ImageBackground>
    </Pressable>
  );
};

export default RecipeItem;
