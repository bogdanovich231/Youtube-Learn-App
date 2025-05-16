import { FontAwesome } from "@expo/vector-icons";
import React, { StyleSheet, Text, View } from "react-native";

interface ItemStatiscticProps {
  icon: string;
  type: "views" | "likes";
  count: number;
}

export const ItemStatisctic = ({ icon, type, count }: ItemStatiscticProps) => {
  return (
    <View style={styles.container}>
      <FontAwesome size={20} name={icon} color={"#FFFFFF"} />
      <Text style={styles.text}>
        {count} {type}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2B2D42",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    height: 32,
    borderRadius: 8,
  },
  text: {
    fontSize: 10,
    fontFamily: "Poppins-SemiBold",
    color: "#FFFFFF",
  },
});
