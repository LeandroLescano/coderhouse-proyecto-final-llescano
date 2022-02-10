import Home from '../screens/Home';
import ListScreen from '../screens/ListScreen';
import React from 'react';
import RecipeDetail from '../screens/RecipeDetail';
import Search from '../screens/Search';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{animation: 'flip'}}>
      <Stack.Screen component={Home} name="Home" />
      <Stack.Screen
        component={RecipeDetail}
        name="RecipeDetail"
        options={{title: 'Recipe detail'}}
      />
      <Stack.Screen component={ListScreen} name="ListScreen" />
      <Stack.Screen component={Search} name="Search" />
    </Stack.Navigator>
  );
};

export default HomeStack;
