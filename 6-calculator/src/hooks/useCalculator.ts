import { useState, useEffect } from "react";
import { convertToPostfixNotation, isOperator } from "../utils/postfixNotation/postfixNotation";
import { calculatePostfixNotation } from "../utils/calculatorPostfixNotation/calculatorPostfixNotation";

function useCalculator(infixNotation: string[]) {
  const [result, setResult] = useState("");

  useEffect(() => {
    const lastElement = infixNotation.at(-1);
    if (isOperator(lastElement)) return;
    const postfixNotation = convertToPostfixNotation(infixNotation);
    const result = calculatePostfixNotation(postfixNotation);
    setResult(result);
  }, [infixNotation]);

  return result;
}

export default useCalculator;
