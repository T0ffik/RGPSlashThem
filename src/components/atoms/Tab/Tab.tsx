import {View} from 'react-native';
import {NavIcon} from '../NavIcon';
import {styles} from './styles';

type TTabProps = {
  route: string;
  isFocused: boolean;
};
export const CustomTabIcon = ({route, isFocused}: TTabProps) => {
  return (
    <View style={styles.pressable}>
      <NavIcon isFocused={isFocused} routeName={route} />
    </View>
  );
};
