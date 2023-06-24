import {Pressable, PressableProps, Text} from 'react-native';
import {memo} from 'react';
import {styles} from './style';

type TCustomButtonProps = PressableProps & {
  title: string;
};

export const CustomButton = memo(({onPress, title}: TCustomButtonProps) => {
  return (
    <Pressable onPress={onPress} style={[styles.button]}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
});
