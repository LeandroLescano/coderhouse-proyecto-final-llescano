import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

import React from 'react';
import {theme} from '../utils/constants/theme';

const EmptyList = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        animating={true}
        color={theme.primaryColor}
        size="large"
      />
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
});
