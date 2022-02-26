import {ActivityIndicator, FlatList, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {searchRecipes, selectRecipe} from '../store/actions/recipe.action';
import {useDispatch, useSelector} from 'react-redux';

import RecipeItem from '../components/RecipeItem';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {selectScreen} from '../store/actions/screen.action';
import {styles} from '../styles/Search.styles';
import {theme} from '../utils/constants/theme';
import {useFocusEffect} from '@react-navigation/native';

const Search = ({navigation}) => {
  const [search, setSearch] = useState();
  const dispatch = useDispatch();
  const recipes = useSelector(state => state.recipes.searchRecipes);
  const [loading, setLoading] = useState(false);

  useFocusEffect(() => {
    dispatch(selectScreen('Search'));
  });

  const handleSearch = () => {
    setLoading(true);
    dispatch(searchRecipes(search));
  };

  useEffect(() => {
    if (recipes && loading) {
      setLoading(false);
    }
  }, [recipes]);

  const handlePress = recipe => {
    dispatch(selectRecipe(recipe));
    navigation.navigate('RecipeDetail');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Search by recipe name"
          value={search}
          style={styles.input}
          onSubmitEditing={() => handleSearch()}
          onChangeText={txt => setSearch(txt)}
        />
        <TouchableHighlight
          onPress={() => handleSearch()}
          style={styles.button}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableHighlight>
      </View>
      {loading ? (
        <ActivityIndicator color={theme.primaryColor} size="large" />
      ) : (
        <FlatList
          data={recipes}
          renderItem={({item}) => (
            <RecipeItem item={item} onPress={() => handlePress(item)} />
          )}
          keyExtractor={item => item.idMeal}
        />
      )}
    </View>
  );
};

export default Search;
