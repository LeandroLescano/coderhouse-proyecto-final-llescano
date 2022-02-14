import {Image, StyleSheet, Text, View} from 'react-native';

import React from 'react';
import {theme} from '../utils/constants/theme';
import {useEffect} from 'react';
import {useState} from 'react';

const IngredientList = ({recipe}) => {
  const [ingredients, setIngredients] = useState([]);
  useEffect(() => {
    let array = [];
    Object.keys(recipe).forEach(key => {
      if (key.includes('strIngredient') && recipe[key] !== '') {
        const index = key.replace('strIngredient', '');
        array.push({
          ingredient: recipe[key],
          measure: recipe['strMeasure' + index],
        });
      }
    });
    setIngredients(array);
  }, [recipe]);
  return (
    <View style={styles.container}>
      {ingredients.map((ingredient, index) => (
        <View key={index} style={styles.row}>
          <View style={styles.item}>
            <Image
              style={styles.image}
              source={{
                uri: `https://www.themealdb.com/images/ingredients/${ingredient.ingredient}.png`,
              }}
            />
            <Text style={{textAlign: 'center'}}>
              <Text style={styles.measure}>{ingredient.measure}</Text>

              <Text style={styles.ingredient}>
                {' - '}
                {ingredient.ingredient}
              </Text>
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default IngredientList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  row: {
    borderColor: theme.grey,
    flexBasis: '33.33%',
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: theme.secondaryColor,
    margin: 5,
    borderColor: theme.grey,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    flex: 1,
    elevation: 5,
  },
  measure: {
    fontWeight: 'bold',
    flex: 0.3,
  },
  ingredient: {
    flex: 1,
    fontSize: 18,
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
});
