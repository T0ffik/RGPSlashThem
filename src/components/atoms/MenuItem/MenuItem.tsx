import {Text, Pressable, PressableProps} from 'react-native';
import {styles} from './styles';
import Animated, {FadeIn, FadeOut} from 'react-native-reanimated';

type TMenuItem = PressableProps & {
  title: string;
};

export const MenuItem = ({onPress, title}: TMenuItem) => {
  return (
    <Animated.View entering={FadeIn} exiting={FadeOut}>
      <Pressable style={styles.item} onPress={onPress}>
        <Text>{title}</Text>
      </Pressable>
    </Animated.View>
  );
};
