import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Bubble from "../components/Bubble";
import Tab from "../components/Tab";
import Country from "../components/Country";
import { doAttack, countryClick } from "../helpers/countryFuncs";

const BoardScreen = () => {
  const [state, setState] = useState({
    attackerIs: null,
    defender: null,
    canadaArmies: 5,
    mericaArmies: 12,
    mexicoArmies: 8,
    showTab: false
  });

  const countryNames = ["Canada", "Merica", "Mexico"];
  const players = [{name: "Alejandro", color: '#3AF'}, {name: "Giselle", color: '#3ADF12'}];

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
      {countryNames.map((name, idx) => {
        let stateName = name.toLowerCase() + "Armies";
        return (
          <Country
            key={idx}
            name={name}
            icon={<Bubble value={state[stateName]} />}
            handleClick={() => countryClick(stateName)}
          />
        );
      })}
    </View>
  );
};

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

export default BoardScreen;
