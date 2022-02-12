import {Pressable, Text, TouchableHighlight} from 'react-native';

import React from 'react';
import {styles} from '../styles/Home.styles';
import {theme} from '../utils/constants/theme';

const HomeButton = ({handlePress, styleButton, title}) => {
  return (
    <Pressable
      activeOpacity={0.2}
      onPress={() => {
        handlePress();
      }}
      style={({pressed}) => [
        styleButton,
        {backgroundColor: pressed ? theme.primaryDark : theme.primaryVariant},
      ]}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

export default HomeButton;
