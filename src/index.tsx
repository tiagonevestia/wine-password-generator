import React, { useState, useCallback } from "react";
import { Box } from "react-native-design-utility";

import Screen from "./components/screen";
import Header from "./components/header";
import GeneratedPassowrd from "./components/generatedPassword";
import PasswordLength from "./components/passwordLength";
import Settings from "./components/settings";
import GeneratePasswordButton from "./components/generatePasswordButton";

import useGeneratePassword from "./hooks/generate";

export default function Src() {
  const [isIncludeUppercase, setIsIncludeUppercase] = useState(false);
  const [isIncludeLowercase, setIsIncludeLowercase] = useState(false);
  const [isIncludeNumber, setIsIncludeNumber] = useState(false);
  const [isIncludeSymbols, setIsIncludeSymbols] = useState(false);

  const {
    password,
    length,
    setLength,
    loading,
    generatePassword,
  } = useGeneratePassword();

  const handlerGeneratePassword = useCallback(() => {
    generatePassword({
      lower: isIncludeLowercase,
      upper: isIncludeUppercase,
      number: isIncludeNumber,
      symbol: isIncludeSymbols,
    });
  }, [
    generatePassword,
    isIncludeLowercase,
    isIncludeUppercase,
    isIncludeNumber,
    isIncludeSymbols,
  ]);

  return (
    <Screen>
      <Box f={0.9}>
        <Header />
        <GeneratedPassowrd password={password} />
        <PasswordLength valueLength={length} setValueLength={setLength} />
        <Settings
          isIncludeUppercase={isIncludeUppercase}
          setIsIncludeUppercase={setIsIncludeUppercase}
          isIncludeLowercase={isIncludeLowercase}
          setIsIncludeLowercase={setIsIncludeLowercase}
          isIncludeNumber={isIncludeNumber}
          setIsIncludeNumber={setIsIncludeNumber}
          isIncludeSymbols={isIncludeSymbols}
          setIsIncludeSymbols={setIsIncludeSymbols}
        />
      </Box>
      <Box f={0.1} mx={20}>
        <GeneratePasswordButton
          loading={loading}
          generatePassword={handlerGeneratePassword}
        />
      </Box>
    </Screen>
  );
}
