import {Pressable, Text} from 'react-native';
import React from 'react';

import {styles} from '../styles/Home.styles';
import {theme} from '../utils/constants/theme';
import {useNetInfo} from '@react-native-community/netinfo';

const HomeButton = ({handlePress, styleButton, title}) => {
  const isConnected = useNetInfo().isConnected;

  return (
    <Pressable
      disabled={isConnected === false}
      activeOpacity={0.2}
      onPress={() => {
        handlePress();
      }}
      style={({pressed}) => [
        styleButton,
        {
          backgroundColor:
            isConnected === false
              ? theme.disabledGrey
              : pressed
              ? theme.primaryDark
              : theme.secondaryColor,
        },
      ]}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

export default HomeButton;
