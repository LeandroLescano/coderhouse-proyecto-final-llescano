import Favourites from '../screens/Favourites';
import HomeStack from './HomeStack';
import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react';
import {Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {theme} from '../utils/constants/theme';

const BottomTab = createMaterialTopTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      tabBarPosition="bottom"
      screenOptions={{
        swipeEnabled: false,
        tabBarStyle: {
          backgroundColor: theme.primaryColor,
        },
        tabBarLabelStyle: {
          color: theme.white,
        },
        tabBarIndicatorStyle: {backgroundColor: theme.white},
      }}>
      <BottomTab.Screen
        name="HomeStack"
        options={{
          tabBarLabel: ({focused}) => (
            <Text style={{color: focused ? theme.white : theme.primaryVariant}}>
              HOME
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <Icon
              name="home"
              size={20}
              color={focused ? theme.white : theme.primaryVariant}
            />
          ),
        }}
        component={HomeStack}
      />
      <BottomTab.Screen
        name="Favorite"
        options={{
          tabBarLabel: ({focused}) => (
            <Text style={{color: focused ? theme.white : theme.primaryVariant}}>
              FAVORITES
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <Icon
              name="heart"
              size={20}
              color={focused ? theme.white : theme.primaryVariant}
            />
          ),
        }}
        component={Favourites}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
