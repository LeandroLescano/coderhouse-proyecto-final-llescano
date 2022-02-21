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
  itemPressed: {
    marginVertical: 8,
    marginHorizontal: 10,
  },
  imageContainer: {
    width: '100%',
    height: 150,
    justifyContent: 'center',
    backgroundColor: theme.secondaryColor,
    borderRadius: 10,
  },
  image: {
    borderRadius: 10,
  },
  imagePressed: {
    borderRadius: 10,
    opacity: 0.6,
  },
  title: {
    color: theme.white,
    fontSize: 25,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0.5)',
    textAlign: 'center',
  },
});
