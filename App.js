import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { setNavigator } from "./src/navigationRef";
import BoardScreen from "./src/screens/BoardScreen";


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

