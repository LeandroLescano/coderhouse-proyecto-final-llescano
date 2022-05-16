import {Button, Text, View} from 'react-native';
import React, {useEffect} from 'react';

import {TouchableHighlight} from 'react-native-gesture-handler';
import {selectScreen} from '../store/actions/screen.action';
import {useDispatch} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';

const Step1 = ({navigation, onNext}) => {
  const dispatch = useDispatch();

  useFocusEffect(() => {
    dispatch(selectScreen('Step1'));
  });

  const handlePress = () => {
    navigation.navigate('Step2');
    onNext();
  };

  return (
    <View style={{backgroundColor: 'gold', flex: 1}}>
      <Text>Step1</Text>
    </View>
  );
};

export default Step1;
