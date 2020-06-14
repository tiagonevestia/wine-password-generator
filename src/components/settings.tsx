import React, { useState } from "react";
import { Box, Text } from "react-native-design-utility";
import theme from "../constants/theme";
import { Switch } from "react-native-paper";

const Settings: React.FC = () => {
  const [isIncludeUppercase, setIsIncludeUppercase] = useState(false);
  const [isIncludeLowercase, setIsIncludeLowercase] = useState(false);
  const [isIncludeNumber, setIsIncludeNumber] = useState(false);
  const [isIncludeSymbols, setIsIncludeSymbols] = useState(false);

  return (
    <Box mx={20} mt={15}>
      <Text size={14} bold uppercase>
        settings
      </Text>
      <Box
        dir="row"
        justify="between"
        h={60}
        mt={5}
        bg={theme.color.greyLight}
        radius={10}
        center
        px={16}
      >
        <Text>Include uppercase letters</Text>
        <Switch
          color={theme.color.black}
          value={isIncludeUppercase}
          onValueChange={() => setIsIncludeUppercase(!isIncludeUppercase)}
        />
      </Box>
      <Box
        dir="row"
        justify="between"
        h={60}
        mt={5}
        bg={theme.color.greyLight}
        radius={10}
        center
        px={16}
      >
        <Text>Include lowercase letters</Text>
        <Switch
          color={theme.color.black}
          value={isIncludeLowercase}
          onValueChange={() => setIsIncludeLowercase(!isIncludeLowercase)}
        />
      </Box>
      <Box
        dir="row"
        justify="between"
        h={60}
        mt={5}
        bg={theme.color.greyLight}
        radius={10}
        center
        px={16}
      >
        <Text>Include numbers</Text>
        <Switch
          color={theme.color.black}
          value={isIncludeNumber}
          onValueChange={() => setIsIncludeNumber(!isIncludeNumber)}
        />
      </Box>
      <Box
        dir="row"
        justify="between"
        h={60}
        mt={5}
        bg={theme.color.greyLight}
        radius={10}
        center
        px={16}
      >
        <Text>Include symbols</Text>
        <Switch
          color={theme.color.black}
          value={isIncludeSymbols}
          onValueChange={() => setIsIncludeSymbols(!isIncludeSymbols)}
        />
      </Box>
    </Box>
  );
};

export default Settings;
