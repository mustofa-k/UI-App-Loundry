import { View, StyleSheet } from "react-native";
import React from "react";
import Tabitem from "../TabItem";

function ButtonNavigator({ state, descriptors, navigation }) {
  return (
    <View style={style.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return <Tabitem key={index} isFocused={isFocused} onLongPress={onLongPress} onPress={onPress} label={label} />;
      })}
    </View>
  );
}

export default ButtonNavigator;

const style = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#ffffff",
    paddingHorizontal: 55,
    paddingVertical: 14,
  },
});
