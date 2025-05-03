import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { ItemStatisctic } from "../itemStatisctic/ItemStatisctic";

interface VideoDetailsProps {
  description: string;
  count: {
    views: number;
    likes: number;
  };
}

export const VideoDetails = ({ description, count }: VideoDetailsProps) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrapperDescription}>
        <Text style={styles.title}>Description</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.wrapperStatistics}>
        <Text style={styles.title}>Statistics</Text>
        <View style={styles.statisticsRow}>
          <ItemStatisctic icon="tv" type="views" count={count.views} />
          <ItemStatisctic icon="thumbs-up" type="likes" count={count.likes} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 10,
    fontFamily: "Poppins-SemiBold",
    color: "#2B2D42",
  },
  wrapperDescription: {
    marginVertical: 16,
    gap: 8,
  },
  description: {
    fontSize: 12,
    fontFamily: "Poppins-Regular",
    color: "#2B2D42",
  },
  wrapperStatistics: {
    gap: 12,
  },
  statisticsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 81,
  },
});
