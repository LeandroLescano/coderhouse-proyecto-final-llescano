import {Text, TouchableHighlight} from 'react-native';

import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import React from 'react';
import {styles} from '../styles/ListItem';
import {theme} from '../utils/constants/theme';

const ListItem = ({title, onPress}) => {
  return (
    <TouchableHighlight
      underlayColor={theme.primaryDark}
      onPress={() => onPress()}
      style={styles.item}>
      <>
        <Text style={styles.title}>{title}</Text>
        <Icon name="angle-right" size={20} color={theme.white} />
      </>
    </TouchableHighlight>
  );
};

export default ListItem;
