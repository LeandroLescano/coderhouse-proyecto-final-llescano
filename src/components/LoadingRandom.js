import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

import React from 'react';
import {theme} from '../utils/constants/theme';

const LoadingRandom = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.text}>Loading random recipe</Text>
        <ActivityIndicator size="large" />
      </View>
    </View>
  );
};

export default LoadingRandom;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 999,
    backgroundColor: theme.transparentDark,
  },
  card: {
    backgroundColor: theme.white,
    padding: 10,
    borderRadius: 5,
  },
  text: {
    fontSize: 20,
    color: theme.black,
    marginBottom: 10,
  },
});
