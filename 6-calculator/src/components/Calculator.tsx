import styled from "styled-components";
import useCalculator from "../hooks/useCalculator";
import Button from "./Button";

function Calculator() {
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
        <Button label={"%"} onClick={() => handlers.handleClickOperator("%")} />
        <Button label={"C"} onClick={handlers.handleClickReset} />
        <Button label={"←"} onClick={handlers.handleClickEraseInput} />
        <Button label={"/"} onClick={() => handlers.handleClickOperator("/")} />
        <Button label={"7"} onClick={() => handlers.handleClickOperand("7")} />
        <Button label={"8"} onClick={() => handlers.handleClickOperand("8")} />
        <Button label={"9"} onClick={() => handlers.handleClickOperand("9")} />
        <Button label={"*"} onClick={() => handlers.handleClickOperator("*")} />
        <Button label={"4"} onClick={() => handlers.handleClickOperand("4")} />
        <Button label={"5"} onClick={() => handlers.handleClickOperand("5")} />
        <Button label={"6"} onClick={() => handlers.handleClickOperand("6")} />
        <Button label={"-"} onClick={() => handlers.handleClickOperator("-")} />
        <Button label={"1"} onClick={() => handlers.handleClickOperand("1")} />
        <Button label={"2"} onClick={() => handlers.handleClickOperand("2")} />
        <Button label={"3"} onClick={() => handlers.handleClickOperand("3")} />
        <Button label={"+"} onClick={() => handlers.handleClickOperator("+")} />
        <Button label={"+/-"} onClick={handlers.handleClickPlusMinus} />
        <Button label={"0"} onClick={() => handlers.handleClickOperand("0")} />
        <Button label={"."} onClick={handlers.handleClickPoint} />
        <Button label={"="} onClick={handlers.handleClickEqual} />
      </ButtonContainer>
    </>
  );
}

export default Calculator;

const FormulaDisplay = styled.div`
  width: 20rem;
  display: flex;
  justify-content: flex-end;
  font-size: 1rem;
`;

const ResultDisplay = styled.div`
  width: 20rem;
  height: 3rem;
  display: flex;
  justify-content: flex-end;
  font-size: 2rem;
`;

const ButtonContainer = styled.div`
  display: grid;
  width: 20rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
