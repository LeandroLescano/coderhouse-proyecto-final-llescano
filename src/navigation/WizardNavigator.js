import React, {useEffect, useRef, useState} from 'react';
import {Text, View} from 'react-native';

import Step1 from '../screens/Step1';
import Step2 from '../screens/Step2';
import Step3 from '../screens/Step3';
import Swiper from '../screens/Swiper';
import Wizard from '../components/Wizard/Wizard';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const WizardNavigator = () => {
  const steps = ['Step1', 'Step2', 'Step3'];
  const step = useRef(0);
  const navigation = useNavigation();

  const handleNext = () => {
    if (step.current < steps.length - 1) {
      step.current += 1;
    } else {
      step.current = 0;
    }
    navigation.navigate(steps[step.current]);
  };

  return (
    <View style={{height: '100%'}}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}>
        <Stack.Screen component={Step1} name="Step1" />
        <Stack.Screen component={Step2} name="Step2" />
        <Stack.Screen component={Step3} name="Step3" />
      </Stack.Navigator>
      <Wizard
        isLastStep={step.current === steps.length - 1}
        onNext={handleNext}
      />
    </View>
  );
};

export default WizardNavigator;
