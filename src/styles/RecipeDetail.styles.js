import {StyleSheet} from 'react-native';
import {theme} from '../utils/constants/theme';

export const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 'auto',
    borderRadius: 10,
  },
  title: {
    fontSize: 25,
    marginVertical: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    padding: 10,
    backgroundColor: theme.primaryColor,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: theme.white,
    fontSize: 15,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
