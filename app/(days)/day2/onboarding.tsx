import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { router, Stack } from "expo-router";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import {
  GestureDetector,
  Gesture,
  Directions,
} from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import Animated, {
  FadeIn,
  FadeOut,
  BounceInRight,
  BounceOutLeft,
  SlideInLeft,
} from "react-native-reanimated";

const onBoardingSteps = [
  {
    title: "Welcome to SaveOption!",
    icon: "money-bill-transfer",
    description:
      "Easily monitor your spending and contributions, and say goodbye to the hassle of bank visits.",
  },
  {
    title: "Track Every Transaction",
    icon: "money-bill-wave",
    description:
      "Keep an eye on all your transactions, ensuring your finances align perfectly with your family's goals.",
  },
  {
    title: "Save Every Penny",
    icon: "piggy-bank",
    description:
      "Maximize your savings with each transaction—every penny counts!",
  },
];

const OnBoardingScreen = () => {
  const [screenIndex, setScreenIndex] = useState(0);
  const [count, setCount] = useState(1);

  const data = onBoardingSteps[screenIndex];

  const onContinue = () => {
    // if (screenIndex === 2) {
    //   setScreenIndex(0);
    // } else {
    //   setScreenIndex(screenIndex + 1);
    // }

    const isLastScreen = screenIndex === onBoardingSteps.length - 1;

    if (!isLastScreen) {
      setScreenIndex(screenIndex + 1);
      setCount((prev) => prev + 1);
    } else {
      onBoarding();
      setCount(1);
    }

    console.log(onBoardingSteps.length);

    // console.log(screenIndex);
  };

  const onBoarding = () => {
    setScreenIndex(0);
    router.back();
  };

  const onBack = () => {
    const isFirstScreen = screenIndex === 0;

    if (isFirstScreen) {
      onBoarding();
    } else {
      setScreenIndex(screenIndex - 1);
    }
  };

  const swipes = Gesture.Simultaneous(
    Gesture.Fling().direction(Directions.LEFT).onEnd(onContinue),
    Gesture.Fling().direction(Directions.RIGHT).onEnd(onBack)
  );
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      <View style={styles.pageIndicatorContainer}>
        {onBoardingSteps.map((step, index) => {
          return (
            <View
              style={[
                styles.indicator,
                {
                  backgroundColor: index === screenIndex ? "#d7d3d1" : "grey",
                },
              ]}
              key={index}
            />
          );
        })}
      </View>
      <GestureDetector gesture={swipes}>
        <View key={screenIndex} style={styles.pageContent}>
          <Animated.View entering={BounceInRight}>
            <FontAwesome6
              style={styles.image}
              name={data.icon}
              size={110}
              color="#d7d3d1"
            />
          </Animated.View>

          <View style={{ marginTop: "auto" }}>
            <Animated.Text
              entering={SlideInLeft}
              exiting={FadeOut}
              style={styles.title}
            >
              {data.title}
            </Animated.Text>
            <Animated.Text
              entering={FadeIn.delay(150)}
              exiting={FadeOut.delay(150)}
              style={styles.description}
            >
              {data.description}{" "}
            </Animated.Text>

            <View style={styles.buttonRows}>
              <Text style={styles.buttonText} onPress={onBoarding}>
                Skip
              </Text>

              <TouchableOpacity onPress={onContinue} style={styles.button}>
                <Text style={styles.buttonText}>Continue</Text>
              </TouchableOpacity>
            </View>

            <Text
              style={{
                fontSize: 19,
                fontFamily: "Inter-Black",
                color: "white",
                textAlign: "auto",
                marginTop: 13,
              }}
            >
              {/* Steps: {`${count} / ${onBoardingSteps.length}`} */}
            </Text>
          </View>
        </View>
      </GestureDetector>
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
    letterSpacing: -0.09,
    fontSize: 50,
    fontWeight: "600",
    marginVertical: 15,
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
  button: {
    backgroundColor: "#9c918e",

    borderRadius: 50,
    flex: 1,

    alignItems: "center",
  },
  buttonRows: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  buttonText: {
    color: "#d7d3d1",
    fontSize: 18,
    fontFamily: "Inter-Black",
    padding: 15,
    paddingHorizontal: 25,
  },
  pageIndicatorContainer: {
    flexDirection: "row",
    gap: 5,
    marginTop: 40,
    marginHorizontal: 15,
  },
  indicator: {
    width: 95,
    flex: 1,

    height: 3,
    backgroundColor: "#d7d3d1",
    borderRadius: 10,
  },
});
