import {DrawerItem, createDrawerNavigator} from '@react-navigation/drawer';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {changeLoginStatus, logOut, setUser} from '../store/actions/user.action';
import {useDispatch, useSelector} from 'react-redux';

import BottomTabNavigator from './BottomTabNavigator';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Login from '../screens/Login';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {clearFavourites} from '../store/actions/favourites.action';
import {theme} from '../utils/constants/theme';

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

  const handleLogOut = () => {
    dispatch(logOut());
    dispatch(clearFavourites());
  };

  return (
    <>
      <NavigationContainer>
        {!isLogged ? (
          <Login />
        ) : (
          <Drawer.Navigator
            screenOptions={{
              headerTitle: currentScreen,
              headerTintColor: theme.white,
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontSize: 16,
              },
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
                  <Text>{`Email:\n${user.email}`}</Text>
                </View>
                <DrawerItem
                  icon={() => (
                    <Icon name="sign-out-alt" size={18} color={theme.white} />
                  )}
                  onPress={() => handleLogOut()}
                  label="Sign Out"
                  labelStyle={{color: theme.white, fontSize: 14}}
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
