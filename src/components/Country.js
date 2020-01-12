import React from "react";
import { Button } from "react-native-elements";
import Bubble from "./Bubble";

const Country = ({name, icon, handleClick}) => {
  return (
    <Button
      containerStyle={styles.country}
      raised
      title={name}
      icon={icon}
      onPress={handleClick}
    />
  );
};

const styles = {
  country: {
    padding: 20
  }
};

export default Country;
