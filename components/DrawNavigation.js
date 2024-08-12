import * as React from "react";
import { Button, View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./nav/TabNavigation";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function DrawNavigation({ route }) {
  const Drawer = createDrawerNavigator();
  const { email } = route.params;

  return (
    <Drawer.Navigator
      screenOptions={({ route }) => ({
        drawerIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "TabNavigation") {
            iconName = focused ? "home" : "home-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        drawerActiveTintColor: "tomato",
        drawerInactiveTintColor: "gray",
      })}
    >
      <Drawer.Screen
        name="TabNavigation"
        component={TabNavigation}
        options={{
          drawerLabel: "Home",
          headerTitle: `Welcome Back ${email}`,
          headerTitleStyle: { fontSize: 14, color: "black" },
          headerStyle: {
            backgroundColor: "pink",
          },
        }}
      />
    </Drawer.Navigator>
  );
}
