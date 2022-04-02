import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useState } from "react";

// Importing Fonts
import * as Font from "expo-font";

// loadFonts handler
const loadFonts = () => {
  return Font.loadAsync({
    Inter: require("./assets/fonts/Inter-Regular.ttf"),
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  });
};

// expo-app-loading
import AppLoading from "expo-app-loading";

// Home & Details screens
import Home from "./screens/Home";
import Details from "./screens/Details";

// Creating the stack
const Stack = createNativeStackNavigator();

// Creating the theme
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

// Here we will handle the navigation part of the application
const App = () => {
  // Loading the font
  const [fonts, setFonts] = useState(false);

  if (!fonts) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setFonts(true)}
        onError={(error) => console.log(error)}
      />
    );
  }

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
