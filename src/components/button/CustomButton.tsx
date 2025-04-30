import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export const CustomButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    paddingVertical: 20,
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    textAlign: "center",
    color: "#FFFFFF",
  },
  button: {
    backgroundColor: "#2B2D42",
    borderRadius: 12,
  },
});
