import React, { useState, useCallback } from "react";

import Screen from "../components/screen";
import Header from "../components/header";
import GeneratedPassowrd from "../components/generatedPassword";
import PasswordLength from "../components/passwordLength";
import Settings from "../components/settings";
import GeneratePasswordButton from "../components/generatePasswordButton";

import useGeneratePassword from "../hooks/generate";

export default function Home() {
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
    storePassword,
    settingsValidation,
    infoPassword,
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
      <Header />
      <GeneratedPassowrd
        password={password}
        storePassword={storePassword}
        infoPassword={infoPassword}
      />
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
        settingsValidation={settingsValidation}
      />
      <GeneratePasswordButton
        loading={loading}
        generatePassword={handlerGeneratePassword}
      />
    </Screen>
  );
}
