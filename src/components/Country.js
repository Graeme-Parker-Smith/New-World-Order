import React from "react";
import { Button } from "react-native-elements";
import Bubble from "./Bubble";

const Country = ({ countryName, armyState }) => {
  return (
    <Button
      containerStyle={styles.country}
      icon={<Bubble value={state[armyState]} />}
      title={countryName}
      raised
      onPress={() => countryClick(armyState)}
    />
  );
};

const styles = {
  country: {
    padding: 20
  }
};

export default Country;
