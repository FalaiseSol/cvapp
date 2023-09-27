import React from 'react';
import { Home, Experience, Sandbox } from '../screens';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#B154DE",
        tabBarInactiveTintColor: "black",
        tabBarStyle: {
          height: 60,
          justifyContent: "center",
          borderTopWidth: 1,
          borderTopColor: "#F3F3F7",
        },
        tabBarLabelStyle: {
          fontSize: 16,
          margin: 0,
          paddingBottom: 6,
        },
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          if(route.name === 'Accueil') {
            return (
              <Icon name="home" size={24} 
                color={focused ? "#B154DE" : "black"} />
            );
          }
          if(route.name === "Mon expérience") {
            return (
              <Icon name="list-alt" size={20} 
                color={focused ? "#B154DE" : "black"} />
            );
          }
          if(route.name === "Sandbox") {
            return (
              <Icon name="briefcase" size={20} 
                color={focused ? "#B154DE" : "black"} />
            );
          }
        },
      })}>
      <Tab.Screen name="Accueil" component={Home} />
      <Tab.Screen name="Mon expérience" component={Experience} />
      <Tab.Screen name="Sandbox" component={Sandbox} />
    </Tab.Navigator>
  );
}

export default Tabs;
