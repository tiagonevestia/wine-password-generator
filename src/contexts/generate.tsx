import React, { createContext, useState, useCallback } from "react";
import zxcvbn, { ZXCVBNResult } from "zxcvbn";

interface GenerateContextData {
  generatePassword: (data: GeneratePropsData) => void;
  setLength: (n: number) => void;
  loading: boolean;
  password: string;
  length: number;
  storePassword: number;
  settingsValidation: boolean;
  infoPassword: ZXCVBNResult | undefined;
}

interface GeneratePropsData {
  lower: boolean;
  upper: boolean;
  symbol: boolean;
  number: boolean;
}

const GenerateContext = createContext<GenerateContextData>(
  {} as GenerateContextData
);

const GenerateProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [length, setLength] = useState(16);
  const [password, setPassword] = useState("password");
  const [storePassword, setStorePassword] = useState(-1);
  const [infoPassword, setInfoPassword] = useState<ZXCVBNResult>();
  const [settingsValidation, setSettingsValidation] = useState(false);

  const charactersGenerateRandomLower = useCallback((): String => {
    const characters = "abcdefghijklmnopqrstuvwxyz";
    let charactersLength = characters.length;
    return characters.charAt(Math.floor(Math.random() * charactersLength));
  }, []);

  const charactersGenerateRandomUpper = useCallback((): String => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let charactersLength = characters.length;
    return characters.charAt(Math.floor(Math.random() * charactersLength));
  }, []);

  const charactersGenerateRandomNumber = useCallback((): String => {
    const characters = "0123456789";
    let charactersLength = characters.length;
    return characters.charAt(Math.floor(Math.random() * charactersLength));
  }, []);

  const charactersGenerateRandomSymbol = useCallback((): String => {
    const characters = "!@#$%^&*(){}[]=<>/,.";
    let charactersLength = characters.length;
    return characters.charAt(Math.floor(Math.random() * charactersLength));
  }, []);

  function generatePassword({
    lower = false,
    upper = false,
    symbol = false,
    number = false,
  }: GeneratePropsData) {
    let objPassword = "";
    setLoading(true);

    if (lower) {
      for (var i = 0; i < length; i++) {
        objPassword += charactersGenerateRandomLower();
      }
    }
    if (upper) {
      for (var i = 0; i < length; i++) {
        objPassword += charactersGenerateRandomUpper();
      }
    }
    if (number) {
      for (var i = 0; i < length; i++) {
        objPassword += charactersGenerateRandomNumber();
      }
    }
    if (symbol) {
      for (var i = 0; i < length; i++) {
        objPassword += charactersGenerateRandomSymbol();
      }
    }

    if (!upper && !lower && !number && !symbol) {
      setPassword("password");
      setSettingsValidation(true);
      setStorePassword(-1);
    } else {
      const formatObjPassword = objPassword
        .split("")
        .sort(() => 0.5 - Math.random())
        .join("")
        .substring(0, length);

      setPassword(formatObjPassword);

      setSettingsValidation(false);
      const zxc = zxcvbn(formatObjPassword);
      setInfoPassword(zxc);
      setStorePassword(zxc.score);
    }

    setLoading(false);
  }

  return (
    <GenerateContext.Provider
      value={{
        loading,
        generatePassword,
        password,
        length,
        setLength,
        storePassword,
        settingsValidation,
        infoPassword,
      }}
    >
      {children}
    </GenerateContext.Provider>
  );
};

export { GenerateContext, GenerateProvider };
