import React, { useEffect, useState } from "react";
import { loadFonts } from "./src/utils/loadFonts/loadFonts";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { AppNavigator } from "./src/navigation/AppNavigator";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    loadFonts().then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer theme={DefaultTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
