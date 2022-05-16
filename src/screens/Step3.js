import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

import {selectScreen} from '../store/actions/screen.action';
import {useDispatch} from 'react-redux';

const Step3 = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(selectScreen('Step3'));
  }, []);
  return (
    <View style={{backgroundColor: 'coral', flex: 1}}>
      <Text>Step3</Text>
    </View>
  );
};

export default Step3;
