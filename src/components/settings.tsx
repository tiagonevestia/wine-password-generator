import React, { memo } from "react";
import { Box, Text } from "react-native-design-utility";
import theme from "../constants/theme";
import { Switch } from "react-native-paper";

interface Props {
  isIncludeUppercase: boolean;
  setIsIncludeUppercase: (p: boolean) => void;
  isIncludeLowercase: boolean;
  setIsIncludeLowercase: (p: boolean) => void;
  isIncludeNumber: boolean;
  setIsIncludeNumber: (p: boolean) => void;
  isIncludeSymbols: boolean;
  setIsIncludeSymbols: (p: boolean) => void;
  settingsValidation: boolean;
}

const Settings: React.FC<Props> = ({
  isIncludeUppercase,
  setIsIncludeUppercase,
  isIncludeLowercase,
  setIsIncludeLowercase,
  isIncludeNumber,
  setIsIncludeNumber,
  isIncludeSymbols,
  setIsIncludeSymbols,
  settingsValidation,
}) => {
  return (
    <Box mx={20} mt={15}>
      <Box dir="row" justify="between">
        <Text size={14} bold uppercase>
          settings
        </Text>
        {settingsValidation && (
          <Text size={10} bold uppercase color={theme.color.redDarkest}>
            selection settings
          </Text>
        )}
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
        <Text>Include uppercase letters</Text>
        <Switch
          trackColor={{
            true: theme.color.grey,
            false: settingsValidation ? theme.color.redDark : theme.color.grey,
          }}
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
          trackColor={{
            true: theme.color.grey,
            false: settingsValidation
              ? theme.color.redDarkest
              : theme.color.grey,
          }}
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
          trackColor={{
            true: theme.color.grey,
            false: settingsValidation
              ? theme.color.redDarkest
              : theme.color.grey,
          }}
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
          trackColor={{
            true: theme.color.grey,
            false: settingsValidation
              ? theme.color.redDarkest
              : theme.color.grey,
          }}
          color={theme.color.black}
          value={isIncludeSymbols}
          onValueChange={() => setIsIncludeSymbols(!isIncludeSymbols)}
        />
      </Box>
    </Box>
  );
};

export default memo(Settings);
