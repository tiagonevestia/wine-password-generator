import React from "react";
import { Box, Text } from "react-native-design-utility";

const Header: React.FC = () => {
  return (
    <Box mx={20}>
      <Text size={30} bold>
        Password Generator
      </Text>
    </Box>
  );
};

export default Header;
