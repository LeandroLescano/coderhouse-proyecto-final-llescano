import {Image, Text, TextInput, TouchableHighlight, View} from 'react-native';

import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import React from 'react';
import {logIn} from '../store/actions/user.action';
import {styles} from '../styles/Login.styles';
import {theme} from '../utils/constants/theme';
import {useDispatch} from 'react-redux';
import {useState} from 'react';

const Login = ({navigation}) => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(logIn(user.email, user.password));
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{uri: 'https://picsum.photos/600/70'}}
      />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={user.email}
          style={styles.input}
          onChangeText={txt => setUser({...user, email: txt})}
        />
        <TextInput
          placeholder="Password"
          value={user.password}
          onChangeText={txt => setUser({...user, password: txt})}
          style={styles.input}
          secureTextEntry={true}
        />
        <Text
          style={styles.signUp}
          onPress={() => navigation.navigate('signUp')}>
          Don't have an account? <Text style={styles.signUpLink}>Sign up</Text>
        </Text>
      </View>
      <TouchableHighlight onPress={() => handleLogin()} style={styles.button}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Login;
