import React, { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ContentCard } from "../contentCard/ContentCard";
import { useEffect, useState } from "react";
import { searchVideos } from "~/utils/api/VideoApi";
import { IVideo } from "~/utils/interfaces/VideoInterface";

type CategoryListProps = {
  onPress: () => void;
  category?: string;
};

export const CategoryList = ({ onPress, category }: CategoryListProps) => {
  const [videos, setVideos] = useState<IVideo[]>([]);

  useEffect(() => {
    const loadVideos = async () => {
      const fetchedVideos = await searchVideos(category || "");
      setVideos(fetchedVideos);
    };
    loadVideos();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.contentTitle}>
        <Text style={styles.title}>{category}</Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.moreText}>Show more</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.wrapperList}>
        <FlatList
          horizontal
          data={videos}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.videoId}
          renderItem={({ item }: { item: IVideo }) => (
            <View style={{ padding: 10 }}>
              <ContentCard
                style={styles.card}
                styleContainer={styles.cardContainer}
                image={item.snippet.thumbnails.high.url}
                description={item.snippet.description}
                date={new Date(item.snippet.publishedAt).toLocaleString()}
              />
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: "#2B2D42",
    borderBottomWidth: 2,
    borderStyle: "solid",
    marginTop: 8,
    paddingBottom: 24,
  },
  title: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 18,
    color: "#2B2D42",
  },
  moreText: {
    color: "#2B2D42",
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    textDecorationLine: "underline",
  },
  card: {
    height: 120,
  },
  cardContainer: {
    width: 200,
  },
  wrapperList: {
    marginTop: 15,
    paddingLeft: 24,
  },
  contentTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
  },
});
