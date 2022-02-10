import {Text, TouchableHighlight, View} from 'react-native';

import {API_RECIPE_RANDOM} from '../utils/constants/api';
import HomeButton from '../components/HomeButton';
import React from 'react';
import {selectRecipe} from '../store/actions/recipe.action';
import {styles} from '../styles/Home.styles';
import {useDispatch} from 'react-redux';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const handleRandomRecipe = async () => {
    const recipe = await fetch(API_RECIPE_RANDOM, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .catch(error => console.log(error));

    dispatch(selectRecipe(recipe.meals[0]));
    navigation.navigate('RecipeDetail');
  };
  return (
    <View style={styles.container}>
      <HomeButton
        handlePress={() => handleRandomRecipe()}
        styleButton={styles.button}
        title="Get a random recipe!"
      />
      <View style={styles.containerButtons}>
        <HomeButton
          handlePress={() =>
            navigation.navigate('ListScreen', {type: 'categories'})
          }
          styleButton={styles.buttonRow}
          title="List all categories"
        />
        <HomeButton
          handlePress={() => navigation.navigate('Search')}
          styleButton={styles.buttonRow}
          title="Search recipes"
        />
      </View>
      <View style={styles.containerButtons}>
        <HomeButton
          handlePress={() =>
            navigation.navigate('ListScreen', {type: 'ingredients'})
          }
          styleButton={styles.buttonRow}
          title="List ingredients"
        />
        <HomeButton
          handlePress={() => navigation.navigate('ListScreen', {type: 'areas'})}
          styleButton={styles.buttonRow}
          title="List areas"
        />
      </View>
    </View>
  );
};

export default Home;
