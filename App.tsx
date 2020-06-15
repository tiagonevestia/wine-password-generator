import React from "react";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { UtilityThemeProvider } from "react-native-design-utility";
import { GenerateProvider } from "./src/contexts/generate";
import theme from "./src/constants/theme";

import Src from "./src";

const themePaper = {
  ...DefaultTheme,
};

export default function App() {
  return (
    <UtilityThemeProvider theme={theme}>
      <PaperProvider theme={themePaper}>
        <GenerateProvider>
          <Src />
        </GenerateProvider>
      </PaperProvider>
    </UtilityThemeProvider>
  );
}
