/* eslint-disable react-native/split-platform-components */
import React, { memo, useState, useEffect } from "react";
import {
  Clipboard,
  TouchableWithoutFeedback,
  ToastAndroid,
} from "react-native";
import { ZXCVBNResult } from "zxcvbn";
import { Box, Text } from "react-native-design-utility";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import theme from "../constants/theme";

interface Props {
  password: string;
  storePassword: number;
  infoPassword: ZXCVBNResult | undefined;
}

interface Status {
  status: string;
  color: string;
}

const GeneratedPassowrd: React.FC<Props> = ({
  password,
  storePassword,
  infoPassword,
}) => {
  const [statusPassword, setStatusPassword] = useState<Status>({
    status: "",
    color: theme.color.redDark,
  });

  const navigation = useNavigation();

  useEffect(() => {
    generatePasswordStrength(storePassword);
  }, [storePassword]);

  function generatePasswordStrength(store: number) {
    switch (store) {
      case 0:
        setStatusPassword({
          status: "risky password",
          color: theme.color.redDark,
        });
        break;
      case 1:
        setStatusPassword({
          status: "very guessable",
          color: theme.color.red,
        });
        break;
      case 2:
        setStatusPassword({
          status: "somewhat guessable",
          color: theme.color.purpleDarkest,
        });
        break;
      case 3:
        setStatusPassword({
          status: "safely unguessable",
          color: theme.color.blueDark,
        });
        break;
      case 4:
        setStatusPassword({
          status: "very unguessable",
          color: theme.color.greenDark,
        });
        break;

      default:
        setStatusPassword({
          status: "",
          color: theme.color.greyLight,
        });
        break;
    }
  }
  return (
    <Box>
      <Box mx={20} mt={20}>
        <Box dir="row" justify="between" center>
          <Text size={14} bold uppercase>
            Generated password
          </Text>
          <Text size={10} bold uppercase color={statusPassword.color}>
            {statusPassword.status}
          </Text>
        </Box>

        <Box
          h={100}
          mt={5}
          py={10}
          px={20}
          bg={theme.color.greyLight}
          radius={10}
          justify="evenly"
          center
          style={{
            borderWidth: 3,
            borderColor: statusPassword.color,
          }}
        >
          <Text size={30} lineH={30}>
            {password}
          </Text>
        </Box>
      </Box>

      {password !== "password" && (
        <Box dir="row-reverse" mx={20} mt={5} justify="evenly">
          <Box>
            <TouchableWithoutFeedback
              onPress={() => {
                Clipboard.setString(password);
                ToastAndroid.show("Password copied!", ToastAndroid.SHORT);
              }}
            >
              <Feather name="copy" size={30} color="black" />
            </TouchableWithoutFeedback>
          </Box>
          <Box>
            <TouchableWithoutFeedback
              onPress={() => {
                navigation.navigate("PasswordInfo", { data: infoPassword });
              }}
            >
              <Feather name="info" size={30} color="black" />
            </TouchableWithoutFeedback>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default memo(GeneratedPassowrd);
