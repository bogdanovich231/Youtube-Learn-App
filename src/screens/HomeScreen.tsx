import { Image, StyleSheet, Text, View } from "react-native";
import { Logo } from "../components/logo/Logo";
import { CustomButton } from "../components/button/CustomButton";

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.title}>Welcome to the best YouTube-based learning application.</Text>
      <Image source={require("../../assets/app-icon.png")} />
      <CustomButton title={"Log in as guest"} onPress={console.log("press login")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8D99AE",
  },
  title: {
    fontFamily: "Poppins-SemiBold",
    color: "#FFFFFF",
    fontSize: 22,
    textAlign: "left",
  },
});
