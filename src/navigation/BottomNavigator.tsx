import React from 'react';
import { Home, Orders, Market } from '../screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: "#397EFF",
        tabBarInactiveTintColor: "#131672",
        tabBarStyle: {
          justifyContent: "center",
          borderTopWidth: 1,
          borderTopColor: "#F3F3F7",
        },
        headerShown: false,
      })}>
      <Tab.Screen name="Accueil" component={Home} />
      <Tab.Screen name="Commandes" component={Orders} />
      <Tab.Screen name="Annuaire" component={Market} />
    </Tab.Navigator>
  );
}

export default Tabs;
