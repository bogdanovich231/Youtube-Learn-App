import React, { ScrollView } from "react-native";
import { CategoryList } from "~/components/categoryList/CategoryList";

const MainScreen = () => {
  return (
    <ScrollView>
      <CategoryList onPress={() => console.log("Show more")} category={"React Native"} />
      <CategoryList onPress={() => console.log("Show more")} category={"React"} />
      <CategoryList onPress={() => console.log("Show more")} category={"Typescript"} />
    </ScrollView>
  );
};

export default MainScreen;
