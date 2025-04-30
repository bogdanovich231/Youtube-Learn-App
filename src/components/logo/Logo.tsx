import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Logo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.youtube}>YouTube</Text>
      <View style={styles.learnContainer}>
        <Text style={styles.learn}>LEARN</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "65%",
    marginTop: 80,
    marginHorizontal: 51,
  },
  youtube: {
    fontSize: 64,
    fontWeight: "bold",
    color: "white",
    fontFamily: "Poppins-Bold",
  },
  learnContainer: {
    alignItems: "flex-end",
  },
  learn: {
    fontFamily: "Poppins-Bold",
    fontSize: 32,
    color: "#2B2D42",
  },
});
