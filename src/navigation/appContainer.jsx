import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import { HomeScreen, HymnScreen, SettingsScreen } from "../screens";

const Tab = createBottomTabNavigator();

export const AppContainer = () => (
  <NavigationContainer>
    <Tab.Navigator initialRouteName="Home" tabBarOptions={{ labelStyle: { color:"#16c79a", fontWeight: "100", fontSize: 14 } }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather name="home" size={22} color={focused ? "#16c79a" : "black"} />
          )
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="book-open"
              size={22}
              color={focused ? "#16c79a" : "black"}
            />
          ),
        }}
        name="Hymns"
        component={HymnScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="settings"
              size={22}
              color={focused ? "#16c79a" : "black"}
            />
          ),
        }}
        name="Settings"
        component={SettingsScreen}
      />
    </Tab.Navigator>
  </NavigationContainer>
);
