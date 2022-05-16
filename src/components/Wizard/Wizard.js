import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import {TouchableHighlight} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';

const Wizard = ({onNext, isLastStep}) => {
  const screen = useSelector(state => state.screen.current);
  return (
    <View style={{borderTopColor: 'lightblue', borderTopWidth: 2, height: 60}}>
      <Text style={{textAlign: 'center'}}>{screen}</Text>
      <TouchableHighlight
        onPress={onNext}
        style={{
          backgroundColor: 'blue',
          borderRadius: 10,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 10,
          marginVertical: 10,
        }}>
        <Text
          style={{color: 'white', fontSize: 16, textTransform: 'uppercase'}}>
          {isLastStep ? 'Finish' : 'Next'}
        </Text>
      </TouchableHighlight>
    </View>
  );
};

export default Wizard;
