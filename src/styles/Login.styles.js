import {StyleSheet} from 'react-native';
import {theme} from '../utils/constants/theme';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    display: 'flex',
    height: '100%',
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  inputContainer: {
    flex: 2,
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 0.5,
    justifyContent: 'center',
  },
  logo: {
    resizeMode: 'contain',
    height: 100,
    width: 'auto',
  },
  signUp: {
    textAlign: 'right',
  },
  signUpLink: {
    color: theme.secondaryColor,
  },
  input: {
    borderColor: theme.grey,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 18,
    marginTop: 10,
  },
  buttonContainer: {
    marginTop: 20,
    borderRadius: 5,
  },
  button: {
    padding: 10,
    backgroundColor: theme.secondaryColor,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonDisabled: {
    padding: 10,
    backgroundColor: theme.grey,
  },
  buttonText: {
    textAlign: 'center',
    color: theme.white,
    fontSize: 20,
    paddingVertical: 5,
    fontWeight: 'bold',
  },
  fingerprintContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
