/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {GlobalStateProvider, Navigation} from './src/components';

function App(): JSX.Element {
  return (
    <GlobalStateProvider>
      <Navigation />
    </GlobalStateProvider>
  );
}

export default App;
