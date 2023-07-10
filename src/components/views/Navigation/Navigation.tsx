import {NavigationContainer} from '@react-navigation/native';
import {ROUTES, RootStackParamList} from 'Static/types/routeTypes';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useState, useEffect} from 'react';
import {
  TabBar,
  Calendar,
  Cards,
  HomeView,
  MainPage,
  Profile,
  Wiki,
} from 'Components/index';

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
          tabBar={props => <TabBar {...props} />}
          initialRouteName={ROUTES.HOME}
          id="RootStack"
        >
          <Tab.Screen name={ROUTES.WIKI} component={Wiki} />
          <Tab.Screen name={ROUTES.CALENDAR} component={Calendar} />
          <Tab.Screen name={ROUTES.HOME} component={HomeView} />
          <Tab.Screen name={ROUTES.CARDS} component={Cards} />
          <Tab.Screen name={ROUTES.PROFILE} component={Profile} />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
};
