import {View, Text, Image, ActivityIndicator} from 'react-native';
import React from 'react';
import {theme} from '../utils/constants/theme';
import {useState} from 'react';

const IngredientItem = ({styles, ingredient}) => {
  const [loading, setLoading] = useState(true);
  return (
    <View style={styles.item}>
      {loading ? (
        <ActivityIndicator color={theme.primaryColor} style={{height: 60}} />
      ) : null}
      <Image
        style={[styles.image, {height: loading ? 0 : 60}]}
        onLoadEnd={() => setLoading(false)}
        source={{
          uri: `https://www.themealdb.com/images/ingredients/${ingredient.ingredient}.png`,
        }}
      />
      <Text style={{textAlign: 'center', color: theme.white}}>
        <Text style={styles.measure}>{ingredient.measure}</Text>

        <Text style={styles.ingredient}>
          {' - '}
          {ingredient.ingredient}
        </Text>
      </Text>
    </View>
  );
};

export default IngredientItem;
