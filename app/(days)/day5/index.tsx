import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

export default function Day5() {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Day 5 : AirBNB Map",
        }}
      />

      <Text
        style={{ fontFamily: "Inter-Black", fontSize: 50, marginBottom: 10 }}
      >
        WELCOME, LET's GET YOU STARTED CLICK TO MAPS
      </Text>
      {/* <Button title="Go onboarding" /> */}

      <Link
        href={"/day5/airbnb"}
        asChild
        style={[
          styles.button,
          { padding: 20, justifyContent: "center", alignItems: "center" },
        ]}
      >
        <TouchableOpacity>
          <Text style={[{ fontFamily: "Inter-Black", color: "#d7d3d1" }]}>
            Go Maps
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
