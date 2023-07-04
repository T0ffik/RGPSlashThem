import {HomeView, MainPage} from '../index';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES, RootStackParamList} from '../../../static/types/routeTypes';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useState, useEffect} from 'react';

const Tab = createBottomTabNavigator<RootStackParamList>();

export const Navigation = () => {
  const [currentUser, setCurrentUser] = useState<FirebaseAuthTypes.User | null>(null);

  const onAuthStateChanged = (user: FirebaseAuthTypes.User | null) => {
    setCurrentUser(user);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {display: !currentUser ? 'none' : 'flex'},
        }}
      >
        {currentUser === null ? (
          <Tab.Screen name={ROUTES.WELCOME} component={MainPage} />
        ) : (
          <Tab.Screen name={ROUTES.HOME} component={HomeView} />
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
};
