import * as Font from "expo-font";

export const loadFonts = async () => {
  await Font.loadAsync({
    "Poppins-Regular": require("../../../fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../../../fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("../../../fonts/Poppins-Bold.ttf"),
    "Poppins-SemiBold": require("../../../fonts/Poppins-SemiBold.ttf"),
  });
};
