import {StyleSheet, Text, View} from 'react-native';

import React from 'react';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {theme} from '../utils/constants/theme';
import {useNavigation} from '@react-navigation/native';

const EmptyList = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>There is no favorites recipes</Text>
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor={theme.secondaryDark}
        style={styles.button}
        onPress={() => navigation.navigate('HomeStack')}>
        <Text style={styles.buttonText}>Explore recipes</Text>
      </TouchableHighlight>
    </View>
  );
};

export default EmptyList;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  text: {
    fontSize: 20,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: theme.secondaryColor,
  },
  buttonText: {
    fontSize: 18,
    color: theme.white,
  },
});
