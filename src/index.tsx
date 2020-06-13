import React from "react";
import { Platform, SafeAreaView, Slider, StatusBar } from "react-native";
import { Button, Switch } from "react-native-paper";
import { Box, Text } from "react-native-design-utility";
import { Feather } from "@expo/vector-icons";

import theme from "./constants/theme";

export default function Src() {
  const [password, setPassword] = React.useState(
    "Ahnki8765$53&8¨7)ijy%4678&yu*okm"
  );
  const [valueSlider, setValueSlider] = React.useState(4);
  const [isIncludeUppercase, setIsIncludeUppercase] = React.useState(false);
  const [isIncludeLowercase, setIsIncludeLowercase] = React.useState(false);
  const [isIncludeNumber, setIsIncludeNumber] = React.useState(false);
  const [isIncludeSymbols, setIsIncludeSymbols] = React.useState(false);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
      }}
    >
      <Box f={1}>
        <Box f={0.9}>
          <Box mx={20}>
            <Text size={30} bold>
              Password Generator
            </Text>
          </Box>
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

          <Box mx={20} mt={15}>
            <Text size={14} bold>
              LENGTH:
              {valueSlider}
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
                  onValueChange={value => setValueSlider(value)}
                />
              </Box>
              <Text size="lg" bold>
                32
              </Text>
            </Box>
          </Box>
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
        </Box>
        <Box f={0.1} mx={20}>
          <Button
            style={{
              height: 50,
              justifyContent: "center"
            }}
            labelStyle={{ fontSize: 16 }}
            mode="contained"
            loading
            color={theme.color.black}
            onPress={() => {
              setPassword("aquisuasenha");
            }}
          >
            Generate password
          </Button>
        </Box>
      </Box>
    </SafeAreaView>
  );
}
