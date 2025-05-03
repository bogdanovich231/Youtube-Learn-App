import React, { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { loadFonts } from "~/utils/loadFonts/loadFonts";

export default function RootLayout() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    loadFonts().then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          animation: "fade",
        }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
          gestureEnabled: false,
          animation: "none",
        }}
      />
      <Stack.Screen
        name="details/[id]"
        options={{
          headerShown: false,
          gestureEnabled: false,
          animation: "none",
        }}
      />
    </Stack>
  );
}
