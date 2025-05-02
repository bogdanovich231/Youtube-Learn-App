import React, { Image, StyleSheet, Text, View } from "react-native";

type ContentCardProps = {
  image: string;
  title?: string;
  description: string;
  date: string;
  style?: object;
  styleContainer?: object;
};

export const ContentCard = ({ image, title, description, date, style, styleContainer }: ContentCardProps) => {
  return (
    <View style={styleContainer}>
      <Image source={{ uri: image }} style={[styles.image, style]} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    borderRadius: 16,
  },
  title: {
    fontFamily: "Poppins-Bold",
    fontSize: 12,
    color: "#2B2D42",
    marginTop: 16,
    marginBottom: 12,
  },
  description: {
    fontFamily: "Poppins-Medium",
    fontSize: 12,
    color: "#2B2D42",
  },
  date: {
    fontSize: 10,
    fontFamily: "Poppins-Regular",
    color: "#2B2D42",
    textAlign: "right",
  },
});
