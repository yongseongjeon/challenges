import { convertToPostfixNotation } from "../postfixNotation/postfixNotation";
import { calculatePostfixNotation } from "../calculatorPostfixNotation/calculatorPostfixNotation";
import { NotationElement } from "../../type";

type InfixNotation = NotationElement[];

function calculate(infixNotation: InfixNotation) {
  const postfixNotation = convertToPostfixNotation(infixNotation);
  const result = calculatePostfixNotation(postfixNotation);
  return result;
}

export default calculate;
