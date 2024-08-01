import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { IconAkun, IconHome, IconPesanan, IconAkunAktive, IconHomeAktive, IconPesananAktive } from "../../../assets/Icons";
import { WARNA_DISABLE, WARNA_UTAMA } from "../../Utils/Constant";

const Tabitem = ({ label, isFocused, onPress, onLongPress }) => {
  const Icon = () => {
    if (label === "Home") return isFocused ? <IconHomeAktive /> : <IconHome />;
    if (label === "Pesanan") return isFocused ? <IconPesananAktive /> : <IconPesanan />;
    if (label === "Akun") return isFocused ? <IconAkunAktive /> : <IconAkun />;
    return <IconHome />;
  };

  return (
    <TouchableOpacity onPress={onPress} onLongPress={onLongPress} style={styles.container}>
      <Icon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Tabitem;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  text: (isFocused) => ({
    color: isFocused ? WARNA_UTAMA : WARNA_DISABLE,
    marginTop: 5,
  }),
});
