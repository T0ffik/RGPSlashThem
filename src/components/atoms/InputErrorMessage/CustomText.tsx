import {Text} from 'react-native';
import {styles} from './styles';
import Animated, {
  FadeIn,
  FadeInUp,
  FadeOutUp,
  SlideInUp,
  SlideOutUp,
} from 'react-native-reanimated';

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
  const wrapper = () => {
    if (variant === Variatns.ERROR) {
      return (
        <Animated.View
          entering={FadeInUp.duration(200)}
          exiting={FadeOutUp.duration(200)}
        >
          <Text style={style}>{text}</Text>
        </Animated.View>
      );
    } else {
      return <Text style={style}>{text}</Text>;
    }
  };
  return wrapper();
};
