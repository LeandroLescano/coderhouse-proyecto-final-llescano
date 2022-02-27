import {AREAS, CATEGORIES, INGREDIENTS} from '../utils/constants/constans';
import React, {useState} from 'react';

import HomeButton from '../components/HomeButton';
import LoadingRandom from '../components/LoadingRandom';
import {View} from 'react-native';
import {getRandomRecipe} from '../store/actions/recipe.action';
import {selectScreen} from '../store/actions/screen.action';
import {styles} from '../styles/Home.styles';
import {useDispatch} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useFocusEffect(() => {
    dispatch(selectScreen('Home'));
  });

  const handleRandomRecipe = async () => {
    setIsLoading(true);
    await dispatch(getRandomRecipe());
    setIsLoading(false);
    navigation.navigate('RecipeDetail');
  };

  return (
    <View style={styles.container}>
      {isLoading ? <LoadingRandom /> : null}
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
