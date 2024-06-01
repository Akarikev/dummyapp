import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList } from "react-native";

import DayListItem from "@/src/components/core/daylist-item";

export default function App() {
  const days = [...Array(24)].map((val, i) => i + 1);

  return (
    <View style={styles.container}>
      {/* <FlatList /> */}

      <FlatList
        contentContainerStyle={[styles.content, { gap: 10 }]}
        data={days}
        columnWrapperStyle={{ gap: 10 }}
        numColumns={2}
        renderItem={({ item }) => <DayListItem item={item} />}
      />

      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

    fontFamily: "Inter-Black",
  },

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
