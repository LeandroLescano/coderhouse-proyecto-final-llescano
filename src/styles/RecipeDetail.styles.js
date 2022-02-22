import {PixelRatio, StyleSheet} from 'react-native';
import {theme} from '../utils/constants/theme';

export const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  image: {
    height: 200,
    width: 'auto',
    borderRadius: 10,
  },
  title: {
    fontSize: 25,
    marginTop: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 15,
    marginVertical: 10,
  },
  button: {
    paddingVertical: 10,
    backgroundColor: theme.secondaryColor,
    borderRadius: 5,
    flex: 1,
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: theme.white,
    fontSize: 15,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
