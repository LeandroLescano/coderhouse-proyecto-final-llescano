import {StyleSheet} from 'react-native';
import {theme} from '../utils/constants/theme';

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  containerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  buttonRow: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    justifyContent: 'center',
    width: '48.5%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    justifyContent: 'center',
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  buttonText: {
    fontSize: 20,
    color: theme.white,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
