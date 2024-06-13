import React, { useState } from "react";
import MarkdownDisplay from "@/src/components/day3/markdown-display";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Stack } from "expo-router";

const copy = `# My Awesome Project

Welcome to the documentation for **My Awesome Project**. This project is designed to help you understand the basics of Markdown and how to create a well-structured README file.

## Table of Contents

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Features](#features)
5. [Contributing](#contributing)
6. [License](#license)

Here's a link [hello elorm](https://www.elorm.site)

Here's an image 

![yow](https://www.elorm.site/yow.png)
## Introduction

My Awesome Project is a simple yet effective project to demonstrate the use of Markdown. It includes sections such as installation instructions, usage examples, features, and contribution guidelines.

## Installation

To install My Awesome Project, follow these steps:

1. Clone the repository: 
    \`\`\`bash
    git clone https://github.com/username/my-awesome-project.git
    \`\`\`
2. Navigate to the project directory:
    \`\`\`bash
    cd my-awesome-project
    \`\`\`
3. Install the dependencies:
    \`\`\`bash
    npm install
    \`\`\`

## Usage

Here's how you can use My Awesome Project:

1. Start the application:
    \`\`\`bash
    npm start
    \`\`\`
2. Open your browser and navigate to \`http://localhost:3000\`.

## Features

- **Easy to use**: Simple and intuitive interface.
- **Customizable**: Easily modify the project to fit your needs.
- **Responsive Design**: Looks great on both desktop and mobile devices.

## Contributing

We welcome contributions! To contribute to My Awesome Project, follow these steps:

1. Fork the repository.
2. Create a new branch (\`git checkout -b feature-branch\`).
3. Make your changes.
4. Commit your changes (\`git commit -m 'Add new feature'\`).
5. Push to the branch (\`git push origin feature-branch\`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
`;

export default function Editor() {
  const [content, setContent] = useState(copy);
  const [tab, setTab] = useState("Edit");

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Markdown Editor",
        }}
      />

      <View style={styles.tabContainer}>
        <Pressable
          style={[
            { backgroundColor: tab === "Edit" ? "#87a96b" : "white" },
            styles.tab,
          ]}
          onPress={() => setTab("Edit")}
        >
          <Text style={styles.tabText}>Edit</Text>
        </Pressable>
        <Pressable
          style={[
            { backgroundColor: tab === "Preview" ? "#87a96b" : "#e3ffdf" },
            styles.tab,
          ]}
          onPress={() => setTab("Preview")}
        >
          <Text style={styles.tabText}>Preview</Text>
        </Pressable>
      </View>

      {tab === "Edit" ? (
        <TextInput
          style={styles.textInput}
          multiline
          onChangeText={setContent}
          value={content}
        />
      ) : (
        <MarkdownDisplay>{content}</MarkdownDisplay>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 10,
    paddingTop: 18,
  },
  textInput: {
    borderColor: "#87a96b",
    borderWidth: 2,
    padding: 10,
    borderRadius: 15,
    paddingHorizontal: 18,
    fontFamily: "Inter-Regular",
    fontSize: 17,
    flex: 1,
  },
  tabContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  tab: {
    padding: 10,
    borderColor: "black",
    borderWidth: 2,
    flex: 1,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 5,
  },
  tabText: {
    fontFamily: "Inter-Black",
    fontSize: 15,
    color: "black",
  },
});
