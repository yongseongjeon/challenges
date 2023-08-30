import { useState, useEffect } from "react";
import { convertToPostfixNotation } from "./utils/postfixNotation/postfixNotation";
import { calculatePostfixNotation } from "./utils/calculatorPostfixNotation/calculatorPostfixNotation";

function useCalculator(infixNotation: string[]) {
  const [result, setResult] = useState("");

  useEffect(() => {
    const postfixNotation = convertToPostfixNotation(infixNotation);
    const result = calculatePostfixNotation(postfixNotation);
    setResult(result);
  }, [infixNotation]);

  return result;
}

export default useCalculator;
