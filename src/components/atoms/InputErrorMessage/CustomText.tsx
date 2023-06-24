import {Text} from 'react-native';
import {styles} from './styles';

export enum Variatns {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  ERROR = 'error',
}

type TCustomText = {
  text: string | undefined;
  variant: Variatns;
};

export const CustomText = ({text, variant}: TCustomText) => {
  const getStyles = () => {
    switch (variant) {
      case Variatns.SECONDARY:
        return styles.secondary;
      case Variatns.ERROR:
        return styles.error;
      case Variatns.PRIMARY:
      default:
        return styles.primary;
    }
  };
  const style = getStyles();
  return <Text style={style}>{text}</Text>;
};
