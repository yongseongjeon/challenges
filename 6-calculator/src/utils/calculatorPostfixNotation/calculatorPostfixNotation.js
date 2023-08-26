import { isOperator } from "../postfixNotation/postfixNotation";

export function calculatePostfixNotation(string) {
  const postfixNotationList = string.split("").reverse();
  const s = [postfixNotationList.pop()];
  while (postfixNotationList.length > 0) {
    const cur = postfixNotationList.pop();
    if (isOperator(cur)) {
      const right = +s.pop();
      const left = +s.pop();
      const result = calculateFourOperations(left, right, cur);
      s.push(result);
    } else {
      s.push(cur);
    }
  }
  return s[0];
}

function calculateFourOperations(left, right, operator) {
  if (operator === "+") {
    return left + right;
  }
  if (operator === "-") {
    return left - right;
  }
  if (operator === "*") {
    return left * right;
  }
  if (operator === "/") {
    return left / right;
  }
}
