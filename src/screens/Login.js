import {Image, Text, TextInput, TouchableHighlight, View} from 'react-native';

import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import React from 'react';
import {styles} from '../styles/Login.styles';
import {useState} from 'react';

const Login = ({handleLogin}) => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{uri: 'https://picsum.photos/800/70'}}
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
      </View>
      <TouchableHighlight onPress={() => handleLogin()} style={styles.button}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Login;
