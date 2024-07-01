import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useRef } from "react";
import { Stack } from "expo-router";
import LottieView from "lottie-react-native";

// const lottie = require("./assets/netflix.json");

const lottie = require("@/assets/netflix.json");

const Netflix = () => {
  const animation = useRef<LottieView>(null);

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Netflix Lottie Animation",
          // headerBlurEffect: "regular",
          headerShown: false,
        }}
      />

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
};

export default Netflix;

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
