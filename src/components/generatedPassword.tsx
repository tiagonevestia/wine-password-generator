import React from "react";
import {
  Clipboard,
  TouchableWithoutFeedback,
  ToastAndroid,
} from "react-native";
import { Box, Text } from "react-native-design-utility";
import theme from "../constants/theme";
import { Feather } from "@expo/vector-icons";

interface Props {
  password: string;
}

const GeneratedPassowrd: React.FC<Props> = ({ password }) => {
  return (
    <Box mx={20} mt={20}>
      <Text size={14} bold uppercase>
        Generated password
      </Text>

      <Box
        h={100}
        mt={5}
        py={10}
        px={20}
        bg={theme.color.greyLight}
        radius={10}
        center
      >
        <Text size={30} lineH={30}>
          {password}
        </Text>
        <Box position="absolute" bottom={0} right={10}>
          <TouchableWithoutFeedback
            onPress={() => {
              Clipboard.setString(password);
              ToastAndroid.show("Password copied!", ToastAndroid.SHORT);
            }}
          >
            <Feather name="copy" size={30} color="black" />
          </TouchableWithoutFeedback>
        </Box>
      </Box>
    </Box>
  );
};

export default GeneratedPassowrd;
