import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

export default function Day2() {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Day 4 : Lotti Animations",
        }}
      />

      <Text
        style={{ fontFamily: "Inter-Black", fontSize: 30, marginBottom: 10 }}
      >
        LET'S SEE WHAT ANIMATIONS CAN DO
      </Text>
      {/* <Button title="Go onboarding" /> */}

      <Link
        href={"/day4/netflix"}
        asChild
        style={[
          styles.button,
          { padding: 20, justifyContent: "center", alignItems: "center" },
        ]}
      >
        <TouchableOpacity>
          <Text style={[{ fontFamily: "Inter-Black", color: "#d7d3d1" }]}>
            Go to Markdownn Editor
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 10,
    justifyContent: "center",
  },

  button: {
    backgroundColor: "#4c3933",
    borderRadius: 20,
  },
  opacity: {
    opacity: 10,
  },
});
