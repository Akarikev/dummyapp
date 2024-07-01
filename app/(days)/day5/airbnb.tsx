import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";
import { Stack } from "expo-router";
import MapViewScreen from "@/src/components/core/maps";

export default class AirbnbMaps extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Stack.Screen
          options={{
            title: "AirbnB maps",
            headerShown: false,
          }}
        />

        {/* <Text>airbnb</Text> */}

        <MapViewScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
