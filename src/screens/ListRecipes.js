import {FlatList, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import RecipeItem from '../components/RecipeItem';
import {getRecipes} from '../store/actions/recipe.action';

const ListRecipes = ({route, handleFilter}) => {
  const type = route.params.type;
  const filter = route.params.filter;
  const dispatch = useDispatch();
  const recipes = useSelector(state => state.recipes.recipes);

  useEffect(() => {
    handleFilter(filter);
    dispatch(getRecipes(type, filter));
  }, []);

  return (
    <View>
      <FlatList
        data={recipes}
        renderItem={({item}) => <RecipeItem item={item} />}
        keyExtractor={item => item.idMeal}
      />
    </View>
  );
};

export default ListRecipes;
