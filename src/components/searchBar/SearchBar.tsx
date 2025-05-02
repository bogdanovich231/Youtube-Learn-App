import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import React, { StyleSheet, TextInput, View } from "react-native";

export const SearchBar = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <View style={styles.container}>
      <FontAwesome size={24} name="search" color={"#2B2D42"} />
      <TextInput
        style={styles.input}
        placeholder="Search videos"
        placeholderTextColor="#888"
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={handleSearch}
        returnKeyType="search"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginTop: 60,
    borderColor: "#2B2D42",
    borderWidth: 2,
    borderRadius: 16,
    height: 44,
    paddingLeft: 12,
    marginHorizontal: 24,
  },
  input: {
    color: "#80818E",
    fontSize: 16,
    fontFamily: "Poppins-Regular",
  },
});
