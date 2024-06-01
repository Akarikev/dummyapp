import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const DayData = () => {
  return (
    <View>
      <Text style={{ fontFamily: "Inter-Black" }}>DayData</Text>

      <Stack.Screen options={{ title: "Day 1" }} />
    </View>
  );
};

export default DayData;

const styles = StyleSheet.create({});
