import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import ConnectScreen from "../screens/ConnectScreen";
import AboutScreen from "../screens/AboutScreen";

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: "#000",
        inactiveTintColor: "#fff",
        activeBackgroundColor: "#CAD5E2",
        inactiveBackgroundColor: "#242B2E",
        tabStyle: {
          color: "#fff",
          justifyContent: "center",
        },
        labelStyle: {
          fontSize: 15,
          fontWeight: "bold",
          textTransform: "uppercase",
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Connect" component={ConnectScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
  );
}
