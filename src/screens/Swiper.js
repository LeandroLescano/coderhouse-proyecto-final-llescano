import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {selectScreen} from '../store/actions/screen.action';
import {useDispatch} from 'react-redux';

const Swiper = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(selectScreen('Swiper'));
  }, []);

  return (
    <View>
      <Text>Swiper</Text>
    </View>
  );
};

export default Swiper;
