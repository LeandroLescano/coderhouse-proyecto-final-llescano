import {
  ActivityIndicator,
  Image,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import {
  logIn,
  setError,
  setLoading,
  signUp,
} from '../store/actions/user.action';
import {useDispatch, useSelector} from 'react-redux';

import React from 'react';
import {styles} from '../styles/Login.styles';
import {theme} from '../utils/constants/theme';
import {useRef} from 'react';
import {useState} from 'react';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
    repeatPassword: '',
  });
  const [isSignUp, setSignUp] = useState(false);
  const inputPassword = useRef();
  const inputRepeatPassword = useRef();
  const inputEmail = useRef();
  const dispatch = useDispatch();
  const error = useSelector(state => state.user.error);
  const loading = useSelector(state => state.user.isLoading);

  const handleLogin = () => {
    if (user.email.length > 0 && user.password.length > 0) {
      dispatch(setLoading(true));
      if (isSignUp) {
        if (user.password === user.repeatPassword) {
          dispatch(signUp(user.email.trim(), user.password.trim()));
        } else {
          dispatch(setError('Passwords do not match'));
          dispatch(setLoading(false));
        }
      } else {
        dispatch(logIn(user.email.trim(), user.password.trim()));
      }
    } else {
      dispatch(setError('Please fill all fields'));
      inputPassword.current.focus();
    }
  };

  const handleSwitch = () => {
    setSignUp(!isSignUp);
    dispatch(setError(''));
  };

  const handleChange = (attr, value) => {
    setUser({...user, [attr]: value});
    if (error) {
      dispatch(setError(null));
    }
  };

  const logo = require('../assets/images/logo-long.png');

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.logo} source={logo} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.title}>{isSignUp ? 'Sign up' : 'Log in'}</Text>
        <TextInput
          placeholder="Email"
          value={user.email}
          style={styles.input}
          ref={inputEmail}
          on
          onSubmitEditing={() => inputPassword.current.focus()}
          onChangeText={txt => handleChange('email', txt)}
        />
        <TextInput
          placeholder="Password"
          value={user.password}
          onChangeText={txt => handleChange('password', txt)}
          style={styles.input}
          ref={inputPassword}
          onSubmitEditing={() =>
            isSignUp ? inputRepeatPassword.current.focus() : handleLogin()
          }
          secureTextEntry={true}
        />
        {isSignUp ? (
          <TextInput
            placeholder="Repeat password"
            value={user.repeatPassword}
            ref={inputRepeatPassword}
            onChangeText={txt => handleChange('repeatPassword', txt)}
            onSubmitEditing={() => handleLogin()}
            style={styles.input}
            secureTextEntry={true}
          />
        ) : null}
        <Text style={styles.signUp} onPress={() => handleSwitch()}>
          {isSignUp ? (
            <>
              Have an account already?{' '}
              <Text style={styles.signUpLink}>Log in</Text>
            </>
          ) : (
            <>
              Don't have an account?{' '}
              <Text style={styles.signUpLink}>Sign up</Text>
            </>
          )}
        </Text>
        <TouchableHighlight onPress={() => handleLogin()} style={styles.button}>
          <Text style={styles.buttonText}>
            {loading ? (
              <ActivityIndicator color={theme.white} size="large" />
            ) : isSignUp ? (
              'Create account'
            ) : (
              'Log in'
            )}
          </Text>
        </TouchableHighlight>
        <View
          style={[
            styles.errorContainer,
            {backgroundColor: error ? '#FAA0A0' : 'transparent'},
          ]}>
          <Text style={styles.errorText}>{error || ''} </Text>
        </View>
      </View>
    </View>
  );
};

export default Login;
