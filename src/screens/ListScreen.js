import {Text, View} from 'react-native';

import React from 'react';
import {useEffect} from 'react';

const ListScreen = ({route}) => {
  useEffect(() => {
    console.log(route.params.type);
  }, [route]);

  return (
    <View>
      <Text>ListScreen</Text>
    </View>
  );
};

export default ListScreen;
