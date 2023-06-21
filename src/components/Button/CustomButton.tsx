import {Pressable, Text, View} from 'react-native';
import {styles} from './style';

interface ICustomButtonProps {
  title: string;
  onPress: () => void;
}

export const CustomButton = ({title, onPress}: ICustomButtonProps) => {
  return (
    <Pressable onPress={onPress}>
      <View style={[styles.button, styles.elevation]}>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </Pressable>
  );
};
