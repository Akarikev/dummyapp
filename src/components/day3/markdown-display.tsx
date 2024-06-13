import {
  StyleProp,
  StyleSheet,
  StyleSheetProperties,
  Text,
  View,
  ViewStyle,
} from "react-native";
import React, { ComponentPropsWithRef, PropsWithRef } from "react";
import { Platform } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Stack } from "expo-router";
import Markdown from "react-native-markdown-display";

const MarkdownDisplay = ({
  children,
  props,
}: {
  children: React.ReactNode;
  props?: ComponentPropsWithRef<typeof Markdown>;
}) => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View style={styles.container}>
        <Markdown style={MarkdownStyles}>{children}</Markdown>
      </View>
    </ScrollView>
  );
};

export default MarkdownDisplay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: "auto",
    backgroundColor: "#fff", // Ensure background color for readability
  },
});

// this is converted to a stylesheet internally at run time with StyleSheet.create(
const MarkdownStyles = {
  // The main container
  body: {
    fontFamily: "Inter-Regular",
    fontSize: 17,
  },

  // Headings
  heading1: {
    fontFamily: "Inter-Black",
    flexDirection: "row",
    fontSize: 34,
    // fontWeight: "bold",
    color: "#6f4417",

    marginBottom: 6,
  },
  heading2: {
    flexDirection: "row",
    fontSize: 24,
    fontWeight: "bold",
    color: "#6f4417",
    marginTop: 10,
    marginBottom: 6,
  },
  heading3: {
    flexDirection: "row",
    fontSize: 18,
    fontWeight: "bold",
  },
  heading4: {
    flexDirection: "row",
    fontSize: 16,
  },
  heading5: {
    flexDirection: "row",
    fontSize: 13,
  },
  heading6: {
    flexDirection: "row",
    fontSize: 11,
  },

  // Horizontal Rule
  hr: {
    backgroundColor: "#000000",
    height: 1,
  },

  // Emphasis
  strong: {
    fontWeight: "bold",
  },
  em: {
    fontStyle: "italic",
  },
  s: {
    textDecorationLine: "line-through",
  },

  // Blockquotes
  blockquote: {
    backgroundColor: "#F5F5F5",
    borderColor: "#CCC",
    borderLeftWidth: 4,
    marginLeft: 5,
    paddingHorizontal: 5,
  },

  // Lists
  bullet_list: {
    color: "blue",
  },
  ordered_list: {},
  list_item: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  // @pseudo class, does not have a unique render rule
  bullet_list_icon: {
    marginLeft: 10,
    marginRight: 10,
  },
  // @pseudo class, does not have a unique render rule
  bullet_list_content: {
    flex: 1,
  },
  // @pseudo class, does not have a unique render rule
  ordered_list_icon: {
    marginLeft: 10,
    marginRight: 10,
  },
  // @pseudo class, does not have a unique render rule
  ordered_list_content: {
    flex: 1,
  },

  // Code
  code_inline: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderRadius: 4,
    ...Platform.select({
      ["ios"]: {
        fontFamily: "Courier",
      },
      ["android"]: {
        fontFamily: "monospace",
      },
    }),
  },
  code_block: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderRadius: 4,
    ...Platform.select({
      ["ios"]: {
        fontFamily: "Courier",
      },
      ["android"]: {
        fontFamily: "monospace",
      },
    }),
  },
  fence: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderRadius: 4,
    ...Platform.select({
      ["ios"]: {
        fontFamily: "Courier",
      },
      ["android"]: {
        fontFamily: "monospace",
      },
    }),
  },

  // Tables
  table: {
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 3,
  },
  thead: {},
  tbody: {},
  th: {
    flex: 1,
    padding: 5,
  },
  tr: {
    borderBottomWidth: 1,
    borderColor: "#000000",
    flexDirection: "row",
  },
  td: {
    flex: 1,
    padding: 5,
  },

  // Links
  link: {
    textDecorationLine: "underline",
  },
  blocklink: {
    flex: 1,
    borderColor: "#000000",
    borderBottomWidth: 1,
  },

  // Images
  image: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
  },

  // Text Output
  text: {},
  textgroup: {},
  paragraph: {
    marginTop: 10,
    marginBottom: 10,
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
  },
  hardbreak: {
    width: "100%",
    height: 1,
  },
  softbreak: {},

  // Believe these are never used but retained for completeness
  pre: {},
  inline: {},
  span: {},
};
