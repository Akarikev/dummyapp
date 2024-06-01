import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";

const DayListItem = ({ item }: { item: number }) => {
  return (
    <Link href={`/day${item}`} asChild>
      <Pressable style={styles.box}>
        <Text style={styles.text}>{item}</Text>
      </Pressable>
    </Link>
  );
};

export default DayListItem;

const styles = StyleSheet.create({
  text: {
    fontFamily: "Inter-Black",
    fontSize: 60,
    paddingLeft: 11,
    color: "#4c4444",
  },

  //

  box: {
    backgroundColor: "#f9ede3",
    // width: 300,
    // height: 300,

    flex: 1,
    aspectRatio: 1,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#4c4444",
  },

  content: {
    padding: 10,
  },

  // uniqueStyles: {
  //the work we ae
  //   paddingHorizontal: 20,
  // },

  // topContainer: {

  //   paddingTop: 12,

  //   maxHeight: 100,
  //   backgroundColor: "gray",
  // },
});
