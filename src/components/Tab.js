import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Button } from "react-native-elements";

const Tab = ({ defender, doAttack }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        How many armies do you wish to attack {defender} with?
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          containerStyle={styles.button}
          onPress={() => doAttack(defender, 1)}
          title="1"
        />
        <Button
          containerStyle={styles.button}
          onPress={() => doAttack(defender, 2)}
          title="2"
        />
        <Button
          containerStyle={styles.button}
          onPress={() => doAttack(defender, 3)}
          title="3"
        />
        <Button
          containerStyle={styles.button}
          onPress={() => doAttack(defender, 4)}
          title="ALL"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50,
    width: Dimensions.get("window").width,
    height: 100,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonContainer: {
    width: Dimensions.get("window").width - 50,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  button: {
    width: 75
  },
  text: {
    color: "#fff",
    fontSize: 18
  }
});

export default Tab;
