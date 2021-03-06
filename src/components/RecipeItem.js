import {ImageBackground, Pressable, Text, View} from 'react-native';
import React, {useEffect} from 'react';

import {styles} from '../styles/RecipeItem.styles';
import {useState} from 'react';

const RecipeItem = ({item, onPress}) => {
  const [isPressed, setIsPressed] = useState(false);

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
