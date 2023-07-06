import {Text} from 'react-native';
import {styles} from './styles';
import Animated, {FadeInUp, FadeOutUp} from 'react-native-reanimated';
import {useMemo} from 'react';

export enum Variatns {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  ERROR = 'error',
}

type TCustomText = {
  text?: string;
  variant: Variatns;
};

export const CustomText = ({text, variant}: TCustomText) => {
  const style = useMemo(() => {
    switch (variant) {
      case Variatns.SECONDARY:
        return styles.secondary;
      case Variatns.ERROR:
        return styles.error;
      case Variatns.PRIMARY:
      default:
        return styles.primary;
    }
  }, [variant]);
  if (variant === Variatns.ERROR) {
    return (
      <Animated.View entering={FadeInUp.duration(200)} exiting={FadeOutUp.duration(200)}>
        <Text style={style}>{text}</Text>
      </Animated.View>
    );
  }

  return <Text style={style}>{text}</Text>;
};
