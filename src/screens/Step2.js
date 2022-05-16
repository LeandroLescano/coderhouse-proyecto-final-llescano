import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

import {selectScreen} from '../store/actions/screen.action';
import {useDispatch} from 'react-redux';

const Step2 = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(selectScreen('Step2'));
  }, []);

  return (
    <View style={{backgroundColor: 'pink', flex: 1}}>
      <Text>Step2</Text>
    </View>
  );
};

export default Step2;
