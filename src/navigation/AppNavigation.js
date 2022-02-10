import React, {useState} from 'react';

import Favourites from '../screens/Favourites';
import HomeStack from './HomeStack';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Login from '../screens/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {theme} from '../utils/constants/theme';

const BottomTab = createMaterialTopTabNavigator();

const AppNavigation = () => {
  const [isLogged, setIsLogged] = useState(true);

  return (
    <>
      {!isLogged ? (
        <Login handleLogin={() => setIsLogged(true)} />
      ) : (
        <NavigationContainer>
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
        </NavigationContainer>
      )}
    </>
  );
};

export default AppNavigation;
