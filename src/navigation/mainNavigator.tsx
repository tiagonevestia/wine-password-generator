import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screen/home";
import PasswordInfo from "../screen/passwordInfo";

const MainStack = createStackNavigator();

const MainStackNavigator: React.FC = () => {
  return (
    <MainStack.Navigator headerMode="none" mode="modal">
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen name="PasswordInfo" component={PasswordInfo} />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;
