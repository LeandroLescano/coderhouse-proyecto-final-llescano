import React, {useEffect, useState} from 'react';
import {changeLoginStatus, setUser} from '../store/actions/user.action';

import Favourites from '../screens/Favourites';
import HomeStack from './HomeStack';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Login from '../screens/Login';
import {NavigationContainer} from '@react-navigation/native';
import SignUp from '../screens/SignUp';
import auth from '@react-native-firebase/auth';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {theme} from '../utils/constants/theme';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';

const BottomTab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  const isLogged = useSelector(state => state.user.isLogged);
  const dispatch = useDispatch();
  // TODO - Create function to sign out
  useEffect(() => {
    const subscribe = auth().onAuthStateChanged(user => {
      if (user) {
        dispatch(setUser(user));
        if (!isLogged) {
          dispatch(changeLoginStatus(true));
        }
      } else {
        if (isLogged) {
          dispatch(changeLoginStatus(false));
        }
      }
    });

    return () => subscribe();
  }, []);
  return (
    <>
      <NavigationContainer>
        {!isLogged ? (
          <Stack.Navigator>
            <Stack.Screen name="logIn" options={{headerShown: false}}>
              {navigation => <Login {...navigation} />}
            </Stack.Screen>
            <Stack.Screen name="signUp" options={{headerShown: false}}>
              {() => <SignUp />}
            </Stack.Screen>
          </Stack.Navigator>
        ) : (
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
        )}
      </NavigationContainer>
    </>
  );
};

export default AppNavigation;
