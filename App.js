import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import {
  StyleSheet,
  useColorScheme,
  ImageBackground,
  Switch,
  View,
} from "react-native";
import SignIn from "./components/sign-in/SignIn";
import DrawNavigation from "./components/DrawNavigation";

export default function App() {
  const colorScheme = useColorScheme();
  const [darkMode, setDarkMode] = useState(colorScheme === "light"); 

  const Stack = createNativeStackNavigator();

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };


  return (
    <ImageBackground
      source={{ uri: "https://png.pngtree.com/thumb_back/fh260/background/20230617/pngtree-online-dating-app-3d-render-of-phone-featuring-heart-like-symbol-image_3609564.jpg"
    }}
      resizeMode="cover"
      style={styles.container}
    >
      <NavigationContainer theme={darkMode ? styles.DarkTheme : styles.LightTheme}>
        <Stack.Navigator
          screenOptions={{ headerShown: true }}
          initialRouteName="SignIn"
        >
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="DrawNavigation" component={DrawNavigation} initialParams={{ email: 'user@example.com' }} />
        </Stack.Navigator>
      </NavigationContainer>
      <View style={styles.switch}>
        <Switch value={darkMode} onValueChange={toggleDarkMode} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  LightTheme: {
    ...DefaultTheme,
    dark: true,
    colors: {
      ...DefaultTheme.colors,
      text: "black",
      background: "transparent",
    },
  },
  DarkTheme: {
    ...DarkTheme,
    dark: false,
    colors: {
      ...DarkTheme.colors,
      text: "white",
      background: "transparent",
    },
  },
  switch: {
    position: "absolute",
    top: 50,
    right: 10,
  },
});
