import React from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { StyleSheet, Text, View } from "react-native";
import appartments from "@/assets/data/day5/appartments.json";
import Feather from "@expo/vector-icons/Feather";

export default function MapViewScreen() {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 5.603717,
          longitude: -0.186964,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {appartments.map((appartment) => {
          return (
            <Marker
              coordinate={{
                latitude: appartment.latitude,
                longitude: appartment.longitude,
              }}
              title={appartment.title}
              description={appartment.description}
              key={appartment.id}
              image={require("@/assets/cafe.png")}
            >
              <View
                style={{
                  backgroundColor: "white",
                  padding: 5,
                  borderWidth: 1,
                  borderColor: "gray",
                  paddingHorizontal: 10,

                  borderRadius: 20,
                }}
              >
                <Text style={{}}>GH₵{appartment.price * 10}</Text>
              </View>
            </Marker>
          );
        })}

        {/* <Marker
          coordinate={{
            latitude: 5.9215688,
            longitude: 0.9910728,
          }}
          title="Keta"
          description="This is keta of volta region"
        /> */}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "Inter-Regular",
  },
  map: {
    width: "100%",
    height: "100%",
    fontFamily: "Inter-Regular",
  },
});
