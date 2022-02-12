import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

import {selectScreen} from '../store/actions/screen.action';
import {useDispatch} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';

const Favourites = () => {
  const dispatch = useDispatch();
  useFocusEffect(() => {
    dispatch(selectScreen('Favourites'));
  });
  return (
    <View>
      <Text>Favourites</Text>
    </View>
  );
};

export default Favourites;
