import React from "react";
import { Platform, SafeAreaView, StatusBar } from "react-native";
import { Box } from "react-native-design-utility";

const Screen: React.FC = ({ children }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <Box f={1}>{children}</Box>
    </SafeAreaView>
  );
};

export default Screen;
