import {AREAS, CATEGORIES, INGREDIENTS} from '../utils/constants/constans';
import React, {useEffect} from 'react';
import {Text, TouchableHighlight, View} from 'react-native';

import {API_RECIPE_RANDOM} from '../utils/constants/api';
import HomeButton from '../components/HomeButton';
import {selectRecipe} from '../store/actions/recipe.action';
import {selectScreen} from '../store/actions/screen.action';
import {styles} from '../styles/Home.styles';
import {useDispatch} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';

const Home = ({navigation}) => {
  const dispatch = useDispatch();

  useFocusEffect(() => {
    dispatch(selectScreen('Home'));
  });

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
            navigation.navigate('ListScreen', {type: CATEGORIES})
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
            navigation.navigate('ListScreen', {type: INGREDIENTS})
          }
          styleButton={styles.buttonRow}
          title="List ingredients"
        />
        <HomeButton
          handlePress={() => navigation.navigate('ListScreen', {type: AREAS})}
          styleButton={styles.buttonRow}
          title="List areas"
        />
      </View>
    </View>
  );
};

export default Home;
