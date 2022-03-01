import {ActivityIndicator, FlatList, Text, TextInput, View} from 'react-native';
import React, {useRef, useState} from 'react';
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
  const [isLoading, setIsLoading] = useState(false);
  const firstSeach = useRef(false);

  useFocusEffect(() => {
    dispatch(selectScreen('Search'));
  });

  const handleSearch = async () => {
    firstSeach.current = true;
    setIsLoading(true);
    await dispatch(searchRecipes(search));
    setIsLoading(false);
  };

  const handlePress = recipe => {
    dispatch(selectRecipe(recipe));
    navigation.navigate('RecipeDetail');
  };

  const NoResults = () => (
    <View style={{marginHorizontal: 10}}>
      <Text style={{textAlign: 'center'}}>
        There is no results for your search
      </Text>
    </View>
  );

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
      {isLoading ? (
        <ActivityIndicator color={theme.primaryColor} size="large" />
      ) : (
        <FlatList
          data={recipes}
          renderItem={({item}) => (
            <RecipeItem item={item} onPress={() => handlePress(item)} />
          )}
          ListEmptyComponent={firstSeach.current ? <NoResults /> : null}
          keyExtractor={item => item.idMeal}
        />
      )}
    </View>
  );
};

export default Search;
