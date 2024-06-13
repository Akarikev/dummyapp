import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import MarkdownDisplay from "@/src/components/day3/markdown-display";

const descriptions = `
   # 24 DAYS OF REACT NATIVE + EXPO 
   
   --- 

   ~~1. Knowing the Basics (Practically React)~~
   ~~2. Onboarding Page~~
     3. Mardown Editor    
`;

const DayData = () => {
  return (
    <View style={styles.container}>
      <MarkdownDisplay>{descriptions}</MarkdownDisplay>

      <Stack.Screen options={{ title: "Day 1" }} />
    </View>
  );
};

export default DayData;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignContent: "center",
    padding: 8,
  },
});
