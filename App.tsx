/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StatusBar } from 'react-native';
import HomeScreen from './src/screens/Home';

function App(): React.JSX.Element {
  return (
    <>
      <StatusBar 
        barStyle="dark-content" 
        backgroundColor="#FFFFFF"
      />
      <HomeScreen />
    </>
  );
}

export default App;
