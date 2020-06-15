import { useContext } from "react";
import { GenerateContext } from "../contexts/generate";

function useGenerate() {
  return useContext(GenerateContext);
}

export default useGenerate;
