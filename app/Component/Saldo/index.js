import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { WARNA_UTAMA } from "../../Utils/Constant";
import ButtonIcon from "../ButtonIcon";
import Gap from "../Gap";

const Saldo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.informasisaldo}>
        <View style={styles.text}>
          <Text style={styles.labelsaldo}>Saldo : </Text>
          <Text style={styles.valuesaldo}>Rp. 100.000</Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.labelpoint}>Point :</Text>
          <Text style={styles.valuepoint}>100 point</Text>
        </View>
      </View>
      <View style={styles.Aksibutton}>
        <ButtonIcon title={"Get Point"} />
        <Gap height={0} width={10} />
        <ButtonIcon title={"Add Saldo"} />
      </View>
    </View>
  );
};

export default Saldo;

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 17,
    marginHorizontal: 30,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
    marginTop: -windowHeight * 0.06,
  },
  text: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  informasisaldo: {
    width: "60%",
  },
  labelsaldo: {
    fontSize: 20,
    fontFamily: "TitilliumWeb-Regular",
  },
  valuesaldo: {
    fontSize: 20,
    fontFamily: "TitilliumWeb-Bold",
  },
  labelpoint: {
    fontSize: 12,
    fontFamily: "TitilliumWeb-Regular",
  },
  valuepoint: {
    fontSize: 12,
    fontFamily: "TitilliumWeb-Bold",
    color: WARNA_UTAMA,
  },
  Aksibutton: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 10,
    justifyContent: "flex-end",
  },
});
