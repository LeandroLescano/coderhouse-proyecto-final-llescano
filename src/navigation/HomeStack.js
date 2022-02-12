import Home from '../screens/Home';
import ListRecipes from '../screens/ListRecipes';
import ListScreen from '../screens/ListScreen';
import React from 'react';
import RecipeDetail from '../screens/RecipeDetail';
import Search from '../screens/Search';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useState} from 'react';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  const [selectedType, setSelectedType] = useState('Categories');
  const [selectedFilter, setSelectedFilter] = useState('');

  const toCapitalize = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'flip',
        headerShown: false,
      }}>
      <Stack.Screen component={Home} name="Home" />
      <Stack.Screen
        component={RecipeDetail}
        name="RecipeDetail"
        options={{title: 'Recipe detail'}}
      />
      <Stack.Screen name="ListScreen" options={{title: selectedType}}>
        {navigation => (
          <ListScreen
            {...navigation}
            handleType={type => setSelectedType(toCapitalize(type))}
          />
        )}
      </Stack.Screen>
      <Stack.Screen
        name="ListRecipes"
        options={{title: 'Recipes - ' + selectedFilter}}>
        {navigation => (
          <ListRecipes
            {...navigation}
            handleFilter={filter => setSelectedFilter(toCapitalize(filter))}
          />
        )}
      </Stack.Screen>
      <Stack.Screen component={Search} name="Search" />
    </Stack.Navigator>
  );
};

export default HomeStack;
