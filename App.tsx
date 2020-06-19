import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { UtilityThemeProvider } from "react-native-design-utility";
import { GenerateProvider } from "./src/contexts/generate";
import theme from "./src/constants/theme";
import MainNavigator from "./src/navigation/mainNavigator";

const themePaper = {
  ...DefaultTheme,
};

export default function App() {
  return (
    <UtilityThemeProvider theme={theme}>
      <PaperProvider theme={themePaper}>
        <GenerateProvider>
          <NavigationContainer>
            <MainNavigator />
          </NavigationContainer>
        </GenerateProvider>
      </PaperProvider>
    </UtilityThemeProvider>
  );
}
