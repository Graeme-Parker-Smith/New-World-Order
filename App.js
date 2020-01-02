import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Bubble from "./src/components/Bubble";

export default function App() {
  const [state, setState] = useState({
    attackerIs: null,
    defenderSelected: false,
    canadaArmies: 5,
    mericaArmies: 12
  });

  const compareRolls = () => {
    const rollDie = () => {
      return Math.floor(Math.random() * 6 + 1);
    };

    const a = rollDie();
    const d = rollDie();
    console.log("attacker rolled: ", a);
    console.log("defender rolled: ", d);

    if (a > d) return true;
    return false;
  };

  const handleClick = defender => {
    if (state.attackerIs) {
      if (state.attackerIs === defender) {
        setState({ ...state, attackerIs: null });
      } else {
        const attackSuccessful = compareRolls();

        if (attackSuccessful) {
          console.log("attack success!");
          setState(prevState => ({
            ...prevState,
            [defender]: prevState[defender] - 1,
            attackerIs: false
          }));
        } else {
          console.log("attack failed!");
          setState(prevState => ({
            ...prevState,
            [state.attackerIs]: prevState[state.attackerIs] - 1,
            attackerIs: false
          }));
        }
      }
    } else {
      setState({ ...state, attackerIs: defender });
    }
  };

  return (
    <View style={styles.container}>
      <Text>
        {state.attackerIs ? "Choose defender broh!" : "Choose attacker broh!"}
      </Text>
      <Button
        containerStyle={styles.country}
        icon={<Bubble value={state.canadaArmies} />}
        title="Canada"
        raised
        onPress={() => handleClick("canadaArmies")}
      />
      <Button
        containerStyle={styles.country}
        icon={<Bubble value={state.mericaArmies} />}
        title="'Merica"
        raised
        onPress={() => handleClick("mericaArmies")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  country: {
    padding: 20
  }
});
