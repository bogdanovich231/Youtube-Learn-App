import React, { Text } from "react-native";
import { CategoryList } from "~/components/categoryList/CategoryList";

const MainScreen = () => {
  return (
    <Text>
      <CategoryList onPress={() => console.log("Show more")} />
    </Text>
  );
};

export default MainScreen;
