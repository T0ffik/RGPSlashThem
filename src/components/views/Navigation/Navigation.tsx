import {HomeView, MainPage} from '../index';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '../../../static/types/routeTypes';
import auth from '@react-native-firebase/auth';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {auth().currentUser === null ? (
          <Stack.Screen
            name={ROUTES.WELCOME}
            component={MainPage}
            options={{animation: 'fade'}}
          />
        ) : (
          <Stack.Screen
            name={ROUTES.HOME}
            component={HomeView}
            options={{animation: 'fade'}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
