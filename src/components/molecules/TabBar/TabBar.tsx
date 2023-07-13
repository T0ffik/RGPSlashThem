import {View, Text, Pressable} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {styles} from './styles';
import {Tab} from 'Components/index';

export const TabBar = ({state, navigation}: BottomTabBarProps) => {
  return (
    <View style={styles.barWrapper}>
      {state.routes.map((route, index) => (
        <Tab
          route={route}
          index={index}
          state={state}
          navigation={navigation}
          key={route.name}
        />
      ))}
    </View>
  );
};
