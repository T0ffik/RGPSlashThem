/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View} from 'react-native';

import {HomeView, MainPage} from './src/components';
import {colors} from './src/static/consts/colors';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from './src/static/types/routeTypes';
import auth from '@react-native-firebase/auth';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <View style={{backgroundColor: colors.white, flex: 1}}>
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
    </View>
  );
}

export default App;
