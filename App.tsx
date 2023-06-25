/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {useColorScheme, View} from 'react-native';

import {MainPage} from './src/components';
import {colors} from './src/static/consts/colors';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from './src/static/types/routeTypes';

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
          <Stack.Screen name={ROUTES.WELCOME} component={MainPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default App;
