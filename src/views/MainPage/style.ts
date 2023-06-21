import {StyleSheet} from 'react-native';
import {colors} from '../../static/consts/colors';

export const styles = StyleSheet.create({
  logo: {
    height: 50,
  },
  main: {
    backgroundColor: colors.white,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingTop: 245,
  },
  logoSubText: {
    marginTop: 15,
    marginBottom: 83,
    fontSize: 20,
    color: '#000',
    fontFamily: 'JosefinSans-Regular',
    fontStyle: 'italic',
    fontWeight: '500',
  },
});
