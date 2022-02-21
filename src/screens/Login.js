import {Image, Text, TextInput, TouchableHighlight, View} from 'react-native';

import React from 'react';
import {logIn, signIn} from '../store/actions/user.action';
import {styles} from '../styles/Login.styles';
import {useDispatch} from 'react-redux';
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
  const inputEmail = useRef();
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (isSignUp) {
      dispatch(signIn(user.email, user.password));
    } else {
      dispatch(logIn(user.email, user.password));
    }
  };

  const logo = require('../assets/images/logo-long.png');

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.logo} source={logo} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={user.email}
          style={styles.input}
          ref={inputEmail}
          onSubmitEditing={() => inputPassword.current.focus()}
          onChangeText={txt => setUser({...user, email: txt})}
        />
        <TextInput
          placeholder="Password"
          value={user.password}
          onChangeText={txt => setUser({...user, password: txt})}
          style={styles.input}
          ref={inputPassword}
          onSubmitEditing={() => handleLogin()}
          secureTextEntry={true}
        />
        {isSignUp ? (
          <TextInput
            placeholder="Repeat password"
            value={user.repeatPassword}
            onChangeText={txt => setUser({...user, repeatPassword: txt})}
            style={styles.input}
            secureTextEntry={true}
          />
        ) : null}
        <Text style={styles.signUp} onPress={() => setSignUp(!isSignUp)}>
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
            {isSignUp ? 'Create account' : 'Log In'}
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default Login;
