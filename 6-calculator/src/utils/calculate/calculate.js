import { convertToPostfixNotation } from "../postfixNotation/postfixNotation";
import { calculatePostfixNotation } from "../calculatorPostfixNotation/calculatorPostfixNotation";

function calculate(infixNotation) {
  const postfixNotation = convertToPostfixNotation(infixNotation);
  const result = calculatePostfixNotation(postfixNotation);
  return result;
}

export default calculate;
