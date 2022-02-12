import {AREAS, CATEGORIES, INGREDIENTS} from '../utils/constants/constans';
import {FlatList, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import EmptyList from '../components/EmptyList';
import ListItem from '../components/ListItem';
import {getAreas} from '../store/actions/area.action';
import {getCategories} from '../store/actions/category.action';
import {getIngredients} from '../store/actions/ingredient.action ';

const ListScreen = ({route, handleType, navigation}) => {
  const dispatch = useDispatch();
  const type = route.params.type;
  const data = useSelector(state => state[type][type]);
  const [titleProperty, setTitleProperty] = useState('str');

  useEffect(() => {
    handleType(type);
    switch (type) {
      case CATEGORIES:
        dispatch(getCategories());
        setTitleProperty('strCategory');
        break;
      case INGREDIENTS:
        dispatch(getIngredients());
        setTitleProperty('strIngredient');
        break;
      case AREAS:
        dispatch(getAreas());
        setTitleProperty('strArea');
        break;
      default:
        break;
    }
  }, []);

  const handlePress = item => {
    navigation.navigate('ListRecipes', {
      type: type,
      filter: item[titleProperty],
    });
  };

  return (
    <View>
      <FlatList
        renderItem={({item}) => (
          <ListItem
            item={item}
            title={item[titleProperty]}
            onPress={() => handlePress(item)}
          />
        )}
        ListEmptyComponent={EmptyList}
        data={data}
        keyExtractor={item => item[titleProperty]}
      />
    </View>
  );
};

export default ListScreen;
