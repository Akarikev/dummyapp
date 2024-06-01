import { Text, View } from "react-native";
import App from "@/App";

import * as SplashScreen from "expo-router";

// SplashScreen.SplashScreen.preventAutoHideAsync();
const AppIndex = () => {
  return (
    <View style={{ flex: 1 }}>
      <App />
    </View>
  );
};

export default AppIndex;
