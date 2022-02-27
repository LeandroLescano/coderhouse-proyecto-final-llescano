import {StyleSheet} from 'react-native';
import {theme} from '../utils/constants/theme';

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  container: {
    padding: 10,
  },
  input: {
    borderColor: theme.grey,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 18,
    flex: 1,
  },
  button: {
    padding: 10,
    backgroundColor: theme.secondaryColor,
    borderRadius: 5,
    marginLeft: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    paddingVertical: 5,
    fontWeight: 'bold',
  },
});
