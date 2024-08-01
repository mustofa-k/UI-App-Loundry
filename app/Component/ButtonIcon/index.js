import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AddSaldo, GetPoint, Setrika, Kiloan, Vip, Karpet, Express, Satuan } from "../../../assets/Icons";
import { WARNA_SECONDARY } from "../../Utils/Constant";

const ButtonIcon = ({ title, type }) => {
  const Icon = () => {
    if (title === "Get Point") return <GetPoint />;
    if (title === "Add Saldo") return <AddSaldo />;

    if (title === "Kiloan") return <Kiloan />; // Pastikan 'Kiloan' konsisten dengan props
    if (title === "Satuan") return <Satuan />;
    if (title === "VIP") return <Vip />;
    if (title === "Setrika Saja") return <Setrika />;
    if (title === "Karpet") return <Karpet />;
    if (title === "Express") return <Express />;
    return <GetPoint />;
  };
  return (
    <TouchableOpacity style={styles.container(type)}>
      <View style={styles.Button(type)}>
        <Icon />
      </View>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonIcon;

const styles = StyleSheet.create({
  container: (type) => ({
    marginBottom: 12,
    marginRight: type === "Layanan" ? 30 : 0,
  }),
  Button: (type) => ({
    backgroundColor: WARNA_SECONDARY,
    padding: type === "Layanan" ? 12 : 7,
    borderRadius: 10,
  }),
  text: (type) => ({
    fontSize: type === "Layanan" ? 14 : 10,
    fontFamily: type === "Layanan" ? "TitilliumWeb-Light" : "TitilliumWeb-Regular",
    textAlign: "center",
  }),
});
