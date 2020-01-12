import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { setNavigator } from "./src/navigationRef";
import BoardScreen from "./src/screens/BoardScreen";

// Create Teams/Players
// Country background colors matches color of owning player
// Players take turns
// Players acquire armies on turn start and place armies before attacking
// Turns split into upkeep, unit placement, attack, (optional) fortify/migrate, and end turn phases

const navigator = createStackNavigator({
  Board: BoardScreen
});

const App = createAppContainer(navigator);

export default () => {
  return (
    <App
      ref={navigator => {
        setNavigator(navigator);
      }}
    />
  );
};

