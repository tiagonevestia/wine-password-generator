import React, { createContext, useState } from "react";

interface GenerateContextData {
  generatePassword: (data: GeneratePropsData) => void;
  loading: boolean;
  password: string;
  length: number;
  setLength: (p: number) => void;
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

  let objPassword = "";

  function randomLower(): String {
    const characters = "abcdefghijklmnopqrstuvwxyz";
    return charactersGenerate(characters);
  }

  function randomUpper(): String {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return charactersGenerate(characters);
  }

  function randomNumber(): String {
    const characters = "0123456789";
    return charactersGenerate(characters);
  }

  function randomSymbol(): String {
    const characters = "!@#$%^&*(){}[]=<>/,.";
    return charactersGenerate(characters);
  }

  function charactersGenerate(characters: String): String {
    let charactersLength = characters.length;
    return characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  function generatePassword({
    lower = false,
    upper = false,
    symbol = false,
    number = false,
  }: GeneratePropsData) {
    setLoading(true);

    if (lower) {
      for (var i = 0; i < length; i++) {
        objPassword += randomLower();
      }
    }
    if (upper) {
      for (var i = 0; i < length; i++) {
        objPassword += randomUpper();
      }
    }
    if (number) {
      for (var i = 0; i < length; i++) {
        objPassword += randomNumber();
      }
    }
    if (symbol) {
      for (var i = 0; i < length; i++) {
        objPassword += randomSymbol();
      }
    }

    if (!upper && !lower && !number && !symbol) {
      setPassword("password");
    } else {
      setPassword(
        objPassword
          .split("")
          .sort(() => 0.5 - Math.random())
          .join("")
          .substring(0, length)
      );
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
      }}
    >
      {children}
    </GenerateContext.Provider>
  );
};

export { GenerateContext, GenerateProvider };
