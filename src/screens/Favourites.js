import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {FlatList} from 'react-native-gesture-handler';
import RecipeItem from '../components/RecipeItem';
import {View} from 'react-native';
import {getFavourites} from '../store/actions/favourites.action';
import {selectRecipe} from '../store/actions/recipe.action';
import {selectScreen} from '../store/actions/screen.action';
import {useFocusEffect} from '@react-navigation/native';

const Favourites = ({navigation}) => {
  const dispatch = useDispatch();
  const favourites = useSelector(state => state.favourites.recipes);
  useFocusEffect(() => {
    dispatch(selectScreen('Favourites'));
  });

  useEffect(() => {
    dispatch(getFavourites());
  }, []);

  const handlePress = recipe => {
    dispatch(selectRecipe(recipe));
    navigation.navigate('RecipeDetail');
  };

  return (
    <View>
      <FlatList
        data={favourites}
        keyExtractor={item => item.idMeal}
        renderItem={({item}) => (
          <RecipeItem item={item} onPress={() => handlePress(item)} />
        )}
      />
    </View>
  );
};

export default Favourites;
