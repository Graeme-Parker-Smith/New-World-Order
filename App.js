import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Bubble from "./src/components/Bubble";
import Tab from "./src/components/Tab";

// Move code out of App.js
// something more

export default function App() {
  const [state, setState] = useState({
    attackerIs: null,
    defender: null,
    canadaArmies: 5,
    mericaArmies: 12,
    showTab: false
  });

  const compareRolls = attackDieCount => {
    const rollDie = () => {
      return Math.floor(Math.random() * 6 + 1);
    };
    let a = [];
    for (let i = 0; i < attackDieCount; i++) {
      a.push(rollDie());
    }
    const d = rollDie();
    console.log("defender rolled: ", d);
    for (let num of a) {
      console.log("attacker rolled: ", num);
      if (num > d) return true;
    }
    return false;
  };

  const doAttack = (defender, attackDieCount) => {
    const attackSuccessful = compareRolls(attackDieCount);

    if (attackSuccessful) {
      console.log("attack success!");
      setState(prevState => ({
        ...prevState,
        [defender]: prevState[defender] - 1,
        attackerIs: null,
        defender: null,
        showTab: false
      }));
    } else {
      console.log("attack failed!");
      setState(prevState => ({
        ...prevState,
        [state.attackerIs]: prevState[state.attackerIs] - 1,
        attackerIs: null,
        defender: null,
        showTab: false
      }));
    }
  };

  const countryClick = defender => {
    if (state.attackerIs) {
      if (state.attackerIs === defender) {
        setState({
          ...state,
          attackerIs: null,
          defender: null,
          showTab: false
        });
      } else {
        // After selecting a country to attack with AND a country to be attacked
        setState({ ...state, showTab: true, defender });
      }
    } else {
      setState({ ...state, attackerIs: defender });
    }
  };

  return (
    <View style={styles.container}>
      {state.showTab ? (
        <Tab
          doAttack={doAttack}
          state={state}
          setState={setState}
          defender={state.defender}
        />
      ) : null}
      <Text>
        {state.attackerIs ? "Choose defender broh!" : "Choose attacker broh!"}
      </Text>
      <Button
        containerStyle={styles.country}
        icon={<Bubble value={state.canadaArmies} />}
        title="Canada"
        raised
        onPress={() => countryClick("canadaArmies")}
      />
      <Button
        containerStyle={styles.country}
        icon={<Bubble value={state.mericaArmies} />}
        title="'Merica"
        raised
        onPress={() => countryClick("mericaArmies")}
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
