import { StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import LottieView from "lottie-react-native";
import { Stack } from "expo-router";

const lottie = require("@/assets/netflix.json");

export default function AnimatedSplashScren() {
  const animation = useRef<LottieView>(null);
  return (
    <View style={styles.container}>
      <Stack.Screen options={{}} />

      <LottieView
        ref={animation}
        autoPlay
        style={{
          width: "80%",
          maxWidth: 400,
          height: 200,
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={lottie}
      />

      {/* <TouchableOpacity
      style={styles.button}
      onPress={() => animation.current?.play()}
    >
      <Text>Play</Text>
    </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    padding: 10,
    marginTop: 10,
    backgroundColor: "#9c918e",
    borderRadius: 50,

    alignItems: "center",
  },
});
