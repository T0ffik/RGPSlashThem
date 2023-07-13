import {View, Text, PressableProps, Pressable} from 'react-native';
import MainMenu from 'Static/icons/MainMenu.svg';
import {colors} from 'Static/consts/colors';

type TMainIconProps = PressableProps & {
  clicked: boolean;
};
export const MenuIcon = ({clicked, onPress}: TMainIconProps) => {
  const color = clicked ? colors.accent : colors.main;
  return (
    <Pressable onPress={onPress}>
      <MainMenu fill={color} />
    </Pressable>
  );
};
