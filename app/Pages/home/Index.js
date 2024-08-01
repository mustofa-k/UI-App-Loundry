import React, { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, Text, View, Dimensions, Image, ScrollView } from "react-native";
import { header, logo } from "../../../assets";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import Saldo from "../../Component/Saldo";
import { ButtonIcon } from "../../Component";
import { WARNA_ABU } from "../../Utils/Constant";
import PesananAktif from "../../Component/PesananAktif";

const Home = () => {
  const [fontsLoaded] = useFonts({
    "TitilliumWeb-Regular": require("../../../assets/font/TitilliumWeb-Regular.ttf"),
    "TitilliumWeb-Bold": require("../../../assets/font/TitilliumWeb-Bold.ttf"),
    "TitilliumWeb-Light": require("../../../assets/font/TitilliumWeb-Light.ttf"),
    "TitilliumWeb-SemiBold": require("../../../assets/font/TitilliumWeb-SemiBold.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // Kembalikan null sementara font masih dimuat
  }

  return (
    <View style={styles.page}>
      <ScrollView dhowsVerticalScrollIndicator={false}>
        <ImageBackground source={header} style={styles.header}>
          <Image source={logo} style={styles.logo} />
          <View style={styles.hello}>
            <Text style={styles.selamat}>Selamat Datang</Text>
            <Text style={styles.name}>Mustofa Kamal</Text>
          </View>
        </ImageBackground>
        <Saldo />
        <View style={styles.layanan}>
          <Text style={styles.layananText}>Layanan Kami</Text>
          <View style={styles.layananButton}>
            <ButtonIcon title={"Kiloan"} type={"Layanan"} />
            <ButtonIcon title={"Satuan"} type={"Layanan"} />
            <ButtonIcon title={"VIP"} type={"Layanan"} />
            <ButtonIcon title={"Karpet"} type={"Layanan"} />
            <ButtonIcon title={"Setrika Saja"} type={"Layanan"} />
            <ButtonIcon title={"Express"} type={"Layanan"} />
          </View>
        </View>
        <View style={styles.pesananAktif}>
          <Text style={styles.pesananAktifText}>Pesanan Aktif</Text>
          <PesananAktif title={"Pesanan No. 0002142"} status={"Sudah Selesai"} />
          <PesananAktif title={"Pesanan No. 0002143"} status={"Masih Dicuci"} />
          <PesananAktif title={"Pesanan No. 0002144"} status={"Sudah Selesai"} />
          <PesananAktif title={"Pesanan No. 0002145"} status={"Masih Dicuci"} />
          <PesananAktif title={"Pesanan No. 0002146"} status={"Sudah Selesai"} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    height: windowHeight * 0.3,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  logo: {
    width: windowWidth * 0.3,
    height: windowHeight * 0.06,
  },
  hello: {
    marginTop: windowHeight * 0.06,
  },
  selamat: {
    fontSize: 24,
    fontFamily: "TitilliumWeb-Regular",
  },
  name: {
    fontSize: 20,
    fontFamily: "TitilliumWeb-Bold",
  },
  layanan: {
    marginTop: windowHeight * 0.03,
    paddingLeft: 30,
  },
  layananText: {
    fontSize: 20,
    fontFamily: "TitilliumWeb-Bold",
  },
  layananButton: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: windowHeight * 0.01,
  },
  pesananAktif: {
    marginTop: windowHeight * 0.02,
    paddingHorizontal: 30,
    flex: 1,
    backgroundColor: WARNA_ABU,
    paddingBottom: 20, // Menambahkan padding bawah agar nyaman untuk digulir
  },
  pesananAktifText: {
    fontSize: 20,
    fontFamily: "TitilliumWeb-Bold",
  },
});
