import { Image, StyleSheet, Text, View } from "react-native";
import { Logo } from "../components/logo/Logo";
import { CustomButton } from "../components/button/CustomButton";

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <View>
        <Image source={require("../../assets/app-icon.png")} />
      </View>
      <View style={styles.bottomContent}>
        <Text style={styles.title}>Welcome to the best YouTube-based learning application.</Text>
        <CustomButton style={styles.buttonStyle} title={"Log in as guest"} onPress={() => console.log("press login")} />

        <Text style={styles.termsText}>
          By continuing you agree with {"\n"} <Text style={styles.link}>Terms and Conditions</Text> and{" "}
          <Text style={styles.link}>Privacy Policy</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8D99AE",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 80,
  },
  title: {
    fontFamily: "Poppins-SemiBold",
    color: "#FFFFFF",
    fontSize: 22,
    textAlign: "left",
    marginBottom: 8,
  },
  bottomContent: {
    alignItems: "center",
    gap: 24,
    width: "100%",
    paddingHorizontal: 34,
  },
  buttonStyle: {
    flex: 1,
    width: "100%",
  },
  termsText: {
    fontFamily: "Poppins-Regular",
    color: "#FFFFFF",
    fontSize: 13,
    textAlign: "center",
    marginTop: 24,
  },
  link: {
    textDecorationLine: "underline",
    color: "#2B2D42",
  },
});
