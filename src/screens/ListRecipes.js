import {FlatList, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {getRecipes, selectRecipe} from '../store/actions/recipe.action';
import {useDispatch, useSelector} from 'react-redux';

import RecipeItem from '../components/RecipeItem';
import {selectScreen} from '../store/actions/screen.action';
import {useFocusEffect} from '@react-navigation/native';

const ListRecipes = ({route, handleFilter, navigation}) => {
  const type = route.params.type;
  const filter = route.params.filter;
  const dispatch = useDispatch();
  const recipes = useSelector(state => state.recipes.recipes);

  useFocusEffect(() => {
    dispatch(selectScreen('Recipes - ' + filter));
  });

  useEffect(() => {
    handleFilter(filter);
    dispatch(getRecipes(type, filter));
  }, []);

  const handlePress = recipe => {
    dispatch(selectRecipe(null, recipe.idMeal));
    navigation.navigate('RecipeDetail');
  };

  return (
    <View>
      <FlatList
        data={recipes}
        renderItem={({item}) => (
          <RecipeItem item={item} onPress={() => handlePress(item)} />
        )}
        keyExtractor={item => item.idMeal}
      />
    </View>
  );
};

export default ListRecipes;
