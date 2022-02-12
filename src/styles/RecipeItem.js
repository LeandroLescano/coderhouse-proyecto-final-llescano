import {StyleSheet} from 'react-native';
import {theme} from '../utils/constants/theme';

export const styles = StyleSheet.create({
  item: {
    marginVertical: 8,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    borderRadius: 10,

    elevation: 2,
  },
  imageContainer: {
    width: '100%',
    height: 150,
    justifyContent: 'center',
  },
  image: {
    borderRadius: 10,
  },
  title: {
    color: theme.white,
    fontSize: 25,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0.5)',
    textAlign: 'center',
  },
});
