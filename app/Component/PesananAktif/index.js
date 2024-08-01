import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from "react-native";
import React from "react";
import { IconPesananLoundry } from "../../../assets/Icons";
import { WARNA_UTAMA } from "../../Utils/Constant";

const PesananAktif = ({ title, status }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <IconPesananLoundry />
      <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.status(status)}>{status}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PesananAktif;
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: windowHeight * 0.01,
    padding: 17,
    borderRadius: 10,

    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  text: {
    marginLeft: windowWidth * 0.02,
  },
  title: {
    fontSize: 18,
    fontFamily: "TitilliumWeb-SemiBold",
  },
  status: (status) => ({
    fontSize: 14,
    fontFamily: "TitilliumWeb-Light",
    color: status === "Sudah Selesai" ? WARNA_UTAMA : "red",
  }),
});
