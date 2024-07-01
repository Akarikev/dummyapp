import AnimatedSplashScren from "@/src/components/day4/animated-splashscreen";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { GestureHandlerRootView, Gesture } from "react-native-gesture-handler";
export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    "Inter-Black": require("@/assets/fonts/Inter-Black.ttf"),
    "Inter-Regular": require("@/assets/fonts/Inter-Regular.ttf"),
  });

  const [appReady, setAppReady] = useState(false);

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded || fontError) {
  //     return null;
  //   }
  // }, [fontsLoaded, fontError]);

  useEffect(() => {
    if (fontsLoaded || fontError) {
      // SplashScreen.hideAsync();

      setTimeout(() => {
        setAppReady(true);
      }, 3000);
    }
  }, [fontsLoaded, fontError]);

  if (!appReady) {
    return <AnimatedSplashScren />;
  }

  if (!fontsLoaded && !fontError) {
    return <AnimatedSplashScren />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerStyle: {},
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: "Home",
          }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}
