import {HomeView, MainPage} from '../index';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES, RootStackParamList} from '../../../static/types/routeTypes';
import auth from '@react-native-firebase/auth';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator<RootStackParamList>();

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {display: 'none'},
        }}
      >
        {auth().currentUser === null ? (
          <Tab.Screen name={ROUTES.WELCOME} component={MainPage} />
        ) : (
          <Tab.Screen name={ROUTES.HOME} component={HomeView} />
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
};
