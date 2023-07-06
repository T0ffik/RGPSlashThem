import {View, Text, Pressable} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {styles} from './styles';
import {NavIcon} from 'Components/index';

export const TabBar = ({state, navigation}: BottomTabBarProps) => {
  return (
    <View style={styles.barWrapper}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        return (
          <Pressable onPress={onPress} key={route.name}>
            <NavIcon isFocused={isFocused} routeName={route.name} />
          </Pressable>
        );
      })}
    </View>
  );
};
