import {Pressable} from 'react-native';
import {NavIcon} from '../NavIcon';
import {BottomTabNavigationEventMap} from '@react-navigation/bottom-tabs';
import {ParamListBase, TabNavigationState} from '@react-navigation/routers';
import {NavigationHelpers} from '@react-navigation/core';
import {styles} from './styles';

type TTabProps = {
  state: TabNavigationState<ParamListBase>;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
  route: any;
  index: number;
};
export const Tab = ({state, index, navigation, route}: TTabProps) => {
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
    <Pressable onPress={onPress} key={route.name} style={styles.pressable}>
      <NavIcon isFocused={isFocused} routeName={route.name} />
    </Pressable>
  );
};
