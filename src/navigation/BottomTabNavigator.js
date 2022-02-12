import Favourites from '../screens/Favourites';
import HomeStack from './HomeStack';
import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react';
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
        tabBarIndicatorStyle: {backgroundColor: theme.secondaryColor},
      }}>
      <BottomTab.Screen
        name="HomeStack"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => <Icon name="home" size={20} color="#FFF" />,
        }}
        component={HomeStack}
      />
      <BottomTab.Screen
        name="Favorite"
        options={{
          tabBarLabel: 'Favorite',
          tabBarIcon: () => <Icon name="heart" size={20} color="#FFF" />,
        }}
        component={Favourites}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
