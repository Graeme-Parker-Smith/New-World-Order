import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Bubble = ({ value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "#fff"
  }
});

export default Bubble;
