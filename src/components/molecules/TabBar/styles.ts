import {StyleSheet} from 'react-native';
import {colors} from 'Static/consts/colors';

export const styles = StyleSheet.create({
  barWrapper: {
    backgroundColor: colors.white,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 19,
    paddingBottom: 18,
    paddingLeft: 31,
    paddingRight: 35,
  },
});
