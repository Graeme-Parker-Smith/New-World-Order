import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Button } from "react-native-elements";

const Tab = ({ defender, doAttack, attackerArmyCount }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        How many armies do you wish to attack {defender} with? Attacker has{" "}
        {attackerArmyCount}
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          disabled={attackerArmyCount < 2}
          containerStyle={styles.button}
          onPress={() => doAttack(defender, 1)}
          title="1"
        />
        <Button
          disabled={attackerArmyCount < 3}
          containerStyle={styles.button}
          onPress={() => doAttack(defender, 2)}
          title="2"
        />
        <Button
          disabled={attackerArmyCount < 4}
          containerStyle={styles.button}
          onPress={() => doAttack(defender, 3)}
          title="3"
        />
        <Button
          disabled={attackerArmyCount < 2}
          containerStyle={styles.button}
          onPress={() =>
            doAttack(
              defender,
              attackerArmyCount > 3 ? 3 : attackerArmyCount - 1
            )
          }
          title="ALL"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
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
