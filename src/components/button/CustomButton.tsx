import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export const CustomButton = ({ onPress, title, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    paddingVertical: 12,
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    textAlign: "center",
    color: "#FFFFFF",
  },
  button: {
    minHeight: 50,
    backgroundColor: "#2B2D42",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
});
