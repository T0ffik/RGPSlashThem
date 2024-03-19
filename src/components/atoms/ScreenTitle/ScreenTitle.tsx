import {Text} from 'react-native';
import {styles} from './styles';

type TScreenTitleProps = {
  children: string;
};
export const ScreenTitle = ({children}: TScreenTitleProps) => {
  return <Text style={styles.title}>{children}</Text>;
};
