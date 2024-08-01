import { Image, ImageBackground, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { logo, splash } from "../../../assets";

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("MainApp");
    }, 3000);
  });
  return (
    <ImageBackground source={splash} style={styles.imagebg} resizeMode="cover">
      <Image source={logo} style={styles.logo} />
    </ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
  imagebg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 222,
    height: 105,
  },
});
