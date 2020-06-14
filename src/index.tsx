import React from "react";
import { Box } from "react-native-design-utility";

import Screen from "./components/screen";
import Header from "./components/header";
import GeneratedPassowrd from "./components/generatedPassword";
import PasswordLength from "./components/passwordLength";
import Settings from "./components/settings";
import GeneratePasswordButton from "./components/generatePasswordButton";

export default function Src() {
  return (
    <Screen>
      <Box f={0.9}>
        <Header />
        <GeneratedPassowrd password={"Ahnki8765$53&8¨7)ijy%4678&yu*okm"} />
        <PasswordLength />
        <Settings />
      </Box>
      <Box f={0.1} mx={20}>
        <GeneratePasswordButton />
      </Box>
    </Screen>
  );
}
