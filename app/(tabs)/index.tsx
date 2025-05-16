import React, { ScrollView, StyleSheet, View } from "react-native";
import { CategoryList } from "~/components/categoryList/CategoryList";
import { SearchBar } from "~/components/searchBar/SearchBar";

const MainScreen = () => {
  return (
    <ScrollView>
      <SearchBar />
      <View style={styles.container}>
        <CategoryList onPress={() => console.log("Show more")} category={"React Native"} />
        <CategoryList onPress={() => console.log("Show more")} category={"React"} />
        <CategoryList onPress={() => console.log("Show more")} category={"Typescript"} />
      </View>
    </ScrollView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 23,
  },
});
