const OPERATORS = ["+", "-", "*", "/"];
const OPERATOR_PRIORITY = {
  "*": 2,
  "/": 2,
  "+": 1,
  "-": 1,
};

export function isOperator(string) {
  return OPERATORS.includes(string);
}

export function convertToPostfixNotation(infixNotation) {
  const infixNotationList = infixNotation.split("");
  const outputQueue = [];
  const operatorStack = [];
  infixNotationList.forEach((el) => {
    if (!isOperator(el)) {
      outputQueue.push(el);
      return;
    }
    if (!operatorStack.length || OPERATOR_PRIORITY[el] > OPERATOR_PRIORITY[operatorStack.at(-1)]) {
      operatorStack.push(el);
      return;
    }
    while (operatorStack.length > 0 && OPERATOR_PRIORITY[el] <= OPERATOR_PRIORITY[operatorStack.at(-1)]) {
      const topEl = operatorStack.pop();
      outputQueue.push(topEl);
    }
    operatorStack.push(el);
  });
  operatorStack.reverse().forEach((el) => outputQueue.push(el));

  return outputQueue.join("");
}
