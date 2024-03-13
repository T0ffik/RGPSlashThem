import {NavigationContainer} from '@react-navigation/native';
import {ROUTES, RootStackParamList} from 'Static/types/routeTypes';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useState, useEffect} from 'react';
import {MainPage, CustomTabIcon} from 'Components/index';
import {tabRoutes} from '../../../static/consts/routes';

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
      {!currentUser ? (
        <MainPage />
      ) : (
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: {display: !currentUser ? 'none' : 'flex'},
          }}
          initialRouteName={ROUTES.HOME}
          id="RootStack"
        >
          {tabRoutes.map(route => (
            <Tab.Screen
              name={route.route as keyof RootStackParamList}
              key={route.route}
              component={route.component}
              options={{
                tabBarIcon: ({focused}) => (
                  <CustomTabIcon route={route.route} isFocused={focused} />
                ),
                tabBarShowLabel: false,
              }}
            />
          ))}
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
};
