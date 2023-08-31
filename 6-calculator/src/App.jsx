import styled from "styled-components";
import useCalculator from "./hooks/useCalculator";

function App() {
  const { state, handlers } = useCalculator();
  const { formula, operator, input, result, isPressedEqualButton } = state;

  return (
    <>
      <FormulaDisplay>
        {formula}
        {operator} {isPressedEqualButton && `= ${input}`}
      </FormulaDisplay>
      <ResultDisplay>{input || result}</ResultDisplay>
      <ButtonContainer>
        <button onClick={() => handlers.handleClickOperator("%")}>%</button>
        <button onClick={handlers.handleClickReset}>C</button>
        <button onClick={handlers.handleClickEraseInput}>←</button>
        <button onClick={() => handlers.handleClickOperator("/")}>/</button>
        <button onClick={() => handlers.handleClickOperand("7")}>7</button>
        <button onClick={() => handlers.handleClickOperand("8")}>8</button>
        <button onClick={() => handlers.handleClickOperand("9")}>9</button>
        <button onClick={() => handlers.handleClickOperator("*")}>*</button>
        <button onClick={() => handlers.handleClickOperand("4")}>4</button>
        <button onClick={() => handlers.handleClickOperand("5")}>5</button>
        <button onClick={() => handlers.handleClickOperand("6")}>6</button>
        <button onClick={() => handlers.handleClickOperator("-")}>-</button>
        <button onClick={() => handlers.handleClickOperand("1")}>1</button>
        <button onClick={() => handlers.handleClickOperand("2")}>2</button>
        <button onClick={() => handlers.handleClickOperand("3")}>3</button>
        <button onClick={() => handlers.handleClickOperator("+")}>+</button>
        <button onClick={handlers.handleClickPlusMinus}>+/-</button>
        <button onClick={() => handlers.handleClickOperand("0")}>0</button>
        <button onClick={handlers.handleClickPoint}>.</button>
        <button onClick={handlers.handleClickEqual}>=</button>
      </ButtonContainer>
    </>
  );
}

export default App;

const FormulaDisplay = styled.div`
  width: 20rem;
  display: flex;
  justify-content: end;
  font-size: 1rem;
`;

const ResultDisplay = styled.div`
  width: 20rem;
  height: 3rem;
  display: flex;
  justify-content: end;
  font-size: 2rem;
`;

const ButtonContainer = styled.div`
  display: grid;
  width: 20rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  button {
    height: 3rem;
    font-size: 1rem;
    cursor: pointer;
  }
`;

