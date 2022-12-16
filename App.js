/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainPage from './pages/Login';
import ProductPage2 from './pages/ProductPage2';
import ProductPage3 from './pages/ProductPage3';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App: () => Node = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="product-page3">
        <Stack.Screen
          name={'login'}
          component={MainPage}
          options={{header: () => null}}
        />
        <Stack.Screen
          name={'product-page'}
          component={ProductPage2}
          options={{header: () => null}}
        />
        <Stack.Screen
          name={'product-page3'}
          component={ProductPage3}
          options={{header: () => null}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;