import {Text} from 'react-native';
import {styles} from './styles';

type TInputErrorMessageProps = {
  children: string;
};

export const InputErrorMessage = ({children}: TInputErrorMessageProps) => {
  return <Text style={styles.message}>{children}</Text>;
};
