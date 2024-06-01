import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const OnBoardingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      <View style={styles.pageContent}>
        <FontAwesome6
          style={styles.image}
          name="money-bill-transfer"
          size={150}
          color="#d7d3d1"
        />

        <View style={{ marginTop: "auto" }}>
          <Text style={styles.title}>Track Every Transaction</Text>
          <Text style={styles.description}>
            Monitor your spending and contributions, ensuring every penny
            aligns, with your families aspiration{" "}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#232712",
    justifyContent: "center",
  },
  image: {
    alignSelf: "center",
    margin: 10,
  },
  title: {
    fontFamily: "Inter-Black",
    color: "#ebe9e8",
    letterSpacing: -0.5,
    fontSize: 50,
    fontWeight: "600",
    marginVertical: 20,
    lineHeight: 53,
  },
  description: {
    fontFamily: "Inter-Regular",

    fontSize: 20,
    color: "gray",
    lineHeight: 27,
  },
  pageContent: {
    padding: 20,
    flex: 1,
  },
});
