import {StyleSheet} from 'react-native';
import {colors} from '../../../static/consts/colors';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.btnBackground,
    height: 41,
    width: 370,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000000',
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '400',
  },
});
