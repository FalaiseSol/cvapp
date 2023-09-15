import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
	Welcome,
} from '../screens';
import BottomNavigator from './BottomNavigator';

const Stack = createNativeStackNavigator();

const MainNavigator = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }} initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />

        <Stack.Screen name="BottomNavigator" component={BottomNavigator} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;