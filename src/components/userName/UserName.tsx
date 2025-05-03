import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface UserNameProps {
  userName: string;
}

export const UserName = ({ userName }: UserNameProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperIcon}>
        <FontAwesome size={20} name="user" color={"#FFFFFF"} />
      </View>
      <Text style={styles.text}>{userName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginHorizontal: 24,
    marginTop: 21,
  },
  text: {
    fontFamily: "Poppins-Bold",
    fontSize: 14,
    color: "#2B2D42",
  },
  wrapperIcon: {
    paddingHorizontal: 17,
    paddingVertical: 14,
    backgroundColor: "#2B2D42",
    borderRadius: "50%",
  },
});
