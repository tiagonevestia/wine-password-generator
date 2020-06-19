import React from "react";
import { useRoute, RouteProp, useNavigation } from "@react-navigation/native";
import { ZXCVBNResult } from "zxcvbn";
import { Appbar, List } from "react-native-paper";

import Screen from "../components/screen";

const theme = {
  colors: {
    primary: "#000",
  },
};

type InfoPasswordRouteParamsList = {
  InfoPassword: {
    data: ZXCVBNResult;
  };
};

type NavigationParams = RouteProp<InfoPasswordRouteParamsList, "InfoPassword">;

const InfoPassword = () => {
  const { data } = useRoute<NavigationParams>().params;
  const navigation = useNavigation();

  console.log(data);
  return (
    <Screen>
      <Appbar.Header style={{ backgroundColor: "white", elevation: 0 }}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content
          title="Password Information"
          titleStyle={{ fontSize: 26, fontWeight: "bold" }}
        />
      </Appbar.Header>

      <List.Section title="Low-Budget Password Strength Estimation">
        <List.Accordion
          theme={theme}
          title="Dictionary Back-Of-The-Envelope"
          left={(props) => <List.Icon {...props} icon="dictionary" />}
        >
          <List.Item
            title="Online throttling 100 per hour"
            description={
              data.crack_times_display.online_throttling_100_per_hour
            }
          />
          <List.Item
            title="Online no throttling 10 per second"
            description={
              data.crack_times_display.online_no_throttling_10_per_second
            }
          />
          <List.Item
            title="Offline attack bcrypt, scrypt, PBKDF2"
            description={
              data.crack_times_display.offline_slow_hashing_1e4_per_second
            }
          />
          <List.Item
            title="Offline attack SHA-1, SHA-256 or MD5"
            description={
              data.crack_times_display.offline_fast_hashing_1e10_per_second
            }
          />
        </List.Accordion>
        {data.feedback.suggestions.length !== 0 && (
          <List.Accordion
            theme={theme}
            title="Feedback"
            left={(props) => <List.Icon {...props} icon="face-agent" />}
          >
            {data.feedback.warning !== "" && (
              <List.Item title="Warning" description={data.feedback.warning} />
            )}
            <List.Item
              title="Suggestions"
              description={data.feedback.suggestions}
            />
          </List.Accordion>
        )}
      </List.Section>
    </Screen>
  );
};

export default InfoPassword;
