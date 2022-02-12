import {DrawerItem, createDrawerNavigator} from '@react-navigation/drawer';
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {changeLoginStatus, logOut, setUser} from '../store/actions/user.action';

import BottomTabNavigator from './BottomTabNavigator';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Login from '../screens/Login';
import {NavigationContainer} from '@react-navigation/native';
import SignUp from '../screens/SignUp';
import auth from '@react-native-firebase/auth';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {theme} from '../utils/constants/theme';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const AppNavigation = () => {
  const {user, isLogged} = useSelector(state => state.user);
  const currentScreen = useSelector(state => state.screen.current);
  const dispatch = useDispatch();

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
          <Drawer.Navigator
            screenOptions={{
              headerTitle: currentScreen,
              headerTintColor: theme.white,
              headerTitleAlign: 'center',

              headerStyle: {
                backgroundColor: theme.primaryColor,
              },
            }}
            drawerContent={props => (
              <View
                style={{
                  justifyContent: 'space-between',
                  height: '100%',
                  paddingBottom: 10,
                }}>
                <View style={{padding: 10}}>
                  <Text>{user.email}</Text>
                </View>
                <DrawerItem
                  icon={() => (
                    <Icon
                      name="sign-out-alt"
                      size={18}
                      color={theme.darkGray}
                    />
                  )}
                  onPress={() => dispatch(logOut())}
                  label="Sign Out"
                  labelStyle={{color: theme.darkGray, fontSize: 15}}
                  style={{backgroundColor: theme.secondaryColor}}
                />
              </View>
            )}>
            <Drawer.Screen
              name="BottomTab"
              options={{title: 'Home'}}
              component={BottomTabNavigator}
            />
          </Drawer.Navigator>
        )}
      </NavigationContainer>
    </>
  );
};

export default AppNavigation;
