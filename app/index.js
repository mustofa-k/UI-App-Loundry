import { StyleSheet } from "react-native";
import React from "react";
import Router from "./Router/index.js";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <Router />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
