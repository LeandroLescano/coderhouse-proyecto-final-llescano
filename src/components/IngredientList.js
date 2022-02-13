import {StyleSheet, Text, View} from 'react-native';

import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';

const IngredientList = ({recipe}) => {
  const [ingredients, setIngredients] = useState([]);
  useEffect(() => {
    Object.keys(recipe).forEach(key => {
      if (key.includes('strIngredient') && recipe[key] !== '') {
        const index = key.replace('strIngredient', '');
        setIngredients(prevIngredients => [
          ...prevIngredients,
          {
            ingredient: recipe[key],
            measure: recipe['strMeasure' + index],
          },
        ]);
      }
    });
  }, [recipe]);
  return (
    <View>
      {ingredients.map((ingredient, index) => (
        <View key={index} style={styles.row}>
          <Text style={styles.measure}>{ingredient.measure}</Text>
          <Text style={styles.ingredient}> {ingredient.ingredient}</Text>
        </View>
      ))}
    </View>
  );
};

export default IngredientList;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    width: '75%',
  },
  measure: {
    fontWeight: 'bold',
    flex: 0.3,
    textAlign: 'right',
  },
  ingredient: {
    textAlign: 'left',
    flex: 1,
  },
});
