import Favourites from '../screens/Favourites';
import HomeStack from './HomeStack';
import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react';
import {Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {theme} from '../utils/constants/theme';
import {useSelector} from 'react-redux';

const BottomTab = createMaterialTopTabNavigator();

const BottomTabNavigator = () => {
  const screen = useSelector(state => state.screen.current);

  return (
    <BottomTab.Navigator
      tabBarPosition="bottom"
      screenOptions={{
        swipeEnabled: false,
        tabBarStyle: {
          backgroundColor: theme.primaryColor,
          height: screen.includes('Step') ? 0 : 'auto',
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
            <Text
              style={{
                color: focused ? theme.white : theme.primaryVariant,
                fontSize: 12,
              }}>
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
            <Text
              style={{
                color: focused ? theme.white : theme.primaryVariant,
                fontSize: 12,
              }}>
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
