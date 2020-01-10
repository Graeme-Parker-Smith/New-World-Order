import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
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

  const compareRolls = (defender, attackDieCount) => {
    // define variables
    let attackerLosses = 0;
    let defenderLosses = 0;
    let a = [];
    let d = [];
    const rollDie = () => {
      return Math.floor(Math.random() * 6 + 1);
    };

    // calculate attacker roll values
    for (let i = 0; i < attackDieCount; i++) {
      a.push(rollDie());
    }
    a.sort((a, b) => b - a);
    console.log("a is: ", a);

    // calculate defender roll values
    for (let i = 0; i < state[defender] && i < 3; i++) {
      d.push(rollDie());
    }
    d.sort((a, b) => b - a);
    console.log("d is: ", d);

    // Going from greatest defender roll value to least, compare with opposing attacker roll value
    for (let i = 0; i < d.length && i < a.length; i++) {
      console.log("attacker roll is: ", a[i]);
      console.log("defender roll is: ", d[i]);
      if (a[i] > d[i]) {
        defenderLosses++;
      } else {
        attackerLosses++;
      }
    }
    return { defenderLosses, attackerLosses };
  };

  const doAttack = (defender, attackDieCount) => {
    if (state[defender] < 1) {
      console.log("defender has no armies to defend with!!!");
      return setState(prevState => ({
        ...prevState,
        attackerIs: null,
        defender: null,
        showTab: false
      }));
    }
    const attackSuccessful = compareRolls(defender, attackDieCount);
    const { defenderLosses, attackerLosses } = attackSuccessful;

    console.log(`Attacker lost ${attackerLosses} armies!`);
    console.log(`Defender lost ${defenderLosses} armies!`);
    setState(prevState => ({
      ...prevState,
      [defender]: prevState[defender] - defenderLosses,
      [state.attackerIs]: prevState[state.attackerIs] - attackerLosses,
      attackerIs: null,
      defender: null,
      showTab: false
    }));
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
          defender={state.defender}
          attackerArmyCount={state[state.attackerIs]}
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
