import React from "react";
import { Platform, SafeAreaView, StatusBar, ScrollView } from "react-native";

const Screen: React.FC = ({ children }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <ScrollView>{children}</ScrollView>
    </SafeAreaView>
  );
};

export default Screen;
