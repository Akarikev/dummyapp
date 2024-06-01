import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { useCallback } from "react";
import { ActivityIndicator } from "react-native";

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    "Inter-Black": require("@/assets/fonts/Inter-Black.ttf"),
    "Inter-Regular": require("@/assets/fonts/Inter-Regular.ttf"),
  });

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded || fontError) {
  //     return null;
  //   }
  // }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return <ActivityIndicator style={{ width: 12, height: 14 }} />;
  }

  return (
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
  );
}
