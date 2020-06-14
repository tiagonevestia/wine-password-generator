import React, { useState } from "react";
import { Slider } from "react-native";
import { Box, Text } from "react-native-design-utility";
import theme from "../constants/theme";

const PasswordLength: React.FC = () => {
  const [valueLength, setValueLength] = useState(4);

  return (
    <Box mx={20} mt={15}>
      <Text size={14} bold>
        LENGTH:
        {valueLength}
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
        <Text size="lg" bold uppercase>
          4
        </Text>
        <Box f={1} px={20}>
          <Slider
            minimumValue={4}
            maximumValue={32}
            minimumTrackTintColor="white"
            thumbTintColor="white"
            step={1}
            value={4}
            onValueChange={(value) => setValueLength(value)}
          />
        </Box>
        <Text size="lg" bold>
          32
        </Text>
      </Box>
    </Box>
  );
};

export default PasswordLength;
