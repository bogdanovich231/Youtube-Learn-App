import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import React, { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ContentCard } from "~/components/contentCard/ContentCard";
import { SearchBar } from "~/components/searchBar/SearchBar";
import { SortModal } from "~/components/sortModal/SortModal";
import { searchVideos } from "~/utils/api/VideoApi";
import { IVideo } from "~/utils/interfaces/VideoInterface";

const SearchScreen = () => {
  const { q } = useLocalSearchParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sortModalVisible, setSortModalVisible] = useState(false);
  const [currentSort, setCurrentSort] = useState<"latest" | "oldest" | "popular">("popular");

  const getSortLabel = () => {
    switch (currentSort) {
      case "latest":
        return "Upload date: latest";
      case "oldest":
        return "Upload date: oldest";
      case "popular":
        return "Most popular";
      default:
        return "Sort by";
    }
  };

  useEffect(() => {
    const fetchResults = async () => {
      if (typeof q !== "string") return;

      setLoading(true);
      setError(null);

      try {
        const data = await searchVideos(q, currentSort);
        setResults(data);
        console.log("Search results:", data);
      } catch (err) {
        setError("Failed to load videos");
        console.error("Search error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [q, currentSort]);

  return (
    <ScrollView>
      <SearchBar />
      <View style={{ paddingHorizontal: 24, marginTop: 10 }}>
        <Text style={styles.resultText}>
          1157 results found for: <Text style={styles.queryText}>"{q}"</Text>
        </Text>
        <TouchableOpacity style={styles.containerButton} onPress={() => setSortModalVisible(true)}>
          <Text style={styles.sortButtonText}>
            Sort by: <Text style={styles.optionText}>{getSortLabel()}</Text>
          </Text>
        </TouchableOpacity>
        <SortModal
          visible={sortModalVisible}
          onClose={() => setSortModalVisible(false)}
          onSelect={(option) => setCurrentSort(option)}
          currentSort={currentSort}
        />
        <FlatList
          data={results}
          keyExtractor={(item) => item.id.videoId}
          renderItem={({ item }: { item: IVideo }) => (
            <View style={{ padding: 10 }}>
              <ContentCard
                style={styles.card}
                styleContainer={styles.cardContainer}
                image={item.snippet.thumbnails.high.url}
                title={item.snippet.title}
                description={item.snippet.description}
                date={new Date(item.snippet.publishedAt).toLocaleString()}
              />
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 300,
    borderRadius: 16,
  },
  cardContainer: {},
  queryText: {
    fontFamily: "Poppins-SemiBold",
  },
  resultText: {
    fontFamily: "Poppins-Regular",
    color: "#2B2D42",
    fontSize: 10,
  },
  sortButtonText: {
    color: "#2B2D42",
    fontSize: 12,
    fontFamily: "Poppins-Regular",
  },
  optionText: {
    fontFamily: "Poppins-SemiBold",
  },
  containerButton: {
    alignItems: "flex-end",
    marginTop: 2,
  },
});
