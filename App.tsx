import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import MainNavigator from "./src/navigation/MainNavigator";

const App = (): JSX.Element => {
  return (
      <SafeAreaView style={{flex: 1}}>
        <MainNavigator />
      </SafeAreaView>
  );
}

export default App;
