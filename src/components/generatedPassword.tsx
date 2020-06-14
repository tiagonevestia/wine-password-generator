import React from "react";
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
          <Feather name="copy" size={30} color="black" />
        </Box>
      </Box>
    </Box>
  );
};

export default GeneratedPassowrd;
