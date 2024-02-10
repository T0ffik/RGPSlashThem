import {StyleSheet} from 'react-native';
import {colors} from 'Static/consts/colors';
export const styles = StyleSheet.create({
  tileWrapper: {
    height: 120,
    backgroundColor: colors.white,
    borderRadius: 8,
    width: '100%',
    padding: 17,
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    elevation: 3,
  },
  image: {
    height: 86,
    width: 86,
    borderRadius: 5,
    backgroundColor: colors.grey,
    marginRight: 20,
  },
  infoWrapper: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    padding: 0,
    fontSize: 24,
    fontWeight: '400',
    color: colors.main,
  },
  info: {
    fontSize: 18,
    fontStyle: 'italic',
  },
  gmInfo: {
    position: 'absolute',
    color: colors.white,
    backgroundColor: colors.yellow,
    borderBottomRightRadius: 8,
    borderTopLeftRadius: 8,
    fontSize: 24,
    bottom: 0,
    right: 0,
    width: 58,
    height: 40,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
