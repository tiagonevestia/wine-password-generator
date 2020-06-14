import React from "react";
import { Button } from "react-native-paper";
import theme from "../constants/theme";

const GeneratePasswordButton: React.FC = () => {
  return (
    <Button
      style={{
        height: 50,
        justifyContent: "center",
      }}
      labelStyle={{ fontSize: 16 }}
      mode="contained"
      loading
      color={theme.color.black}
      onPress={() => {}}
    >
      Generate password
    </Button>
  );
};

export default GeneratePasswordButton;
