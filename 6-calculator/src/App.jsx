import styled from "styled-components";
import { useReducer } from "react";
import { initialState, reducer } from "./reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { formula, operator, input, result, isPressedEqualButton } = state;

  return (
    <>
      <FormulaDisplay>
        {formula} {operator} {isPressedEqualButton ? `= ${input}` : ""}
      </FormulaDisplay>
      <ResultDisplay>{input || result}</ResultDisplay>
      <ButtonContainer>
        <button
          onClick={() => {
            dispatch({ type: "CLICK_OPERATOR", payload: "%" });
          }}
        >
          %
        </button>
        <button
          onClick={() => {
            dispatch({ type: "CLICK_RESET" });
          }}
        >
          C
        </button>
        <button onClick={() => dispatch({ type: "CLICK_ERASE_INPUT" })}>←</button>
        <button
          onClick={() => {
            dispatch({ type: "CLICK_OPERATOR", payload: "/" });
          }}
        >
          /
        </button>
        <button
          onClick={() => {
            dispatch({ type: "CLICK_OPERAND", payload: "7" });
          }}
        >
          7
        </button>
        <button
          onClick={() => {
            dispatch({ type: "CLICK_OPERAND", payload: "8" });
          }}
        >
          8
        </button>
        <button
          onClick={() => {
            dispatch({ type: "CLICK_OPERAND", payload: "9" });
          }}
        >
          9
        </button>
        <button
          onClick={() => {
            dispatch({ type: "CLICK_OPERATOR", payload: "*" });
          }}
        >
          *
        </button>
        <button
          onClick={() => {
            dispatch({ type: "CLICK_OPERAND", payload: "4" });
          }}
        >
          4
        </button>
        <button
          onClick={() => {
            dispatch({ type: "CLICK_OPERAND", payload: "5" });
          }}
        >
          5
        </button>
        <button
          onClick={() => {
            dispatch({ type: "CLICK_OPERAND", payload: "6" });
          }}
        >
          6
        </button>

        <button
          onClick={() => {
            dispatch({ type: "CLICK_OPERATOR", payload: "-" });
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            dispatch({ type: "CLICK_OPERAND", payload: "1" });
          }}
        >
          1
        </button>
        <button
          onClick={() => {
            dispatch({ type: "CLICK_OPERAND", payload: "2" });
          }}
        >
          2
        </button>
        <button
          onClick={() => {
            dispatch({ type: "CLICK_OPERAND", payload: "3" });
          }}
        >
          3
        </button>

        <button
          onClick={() => {
            dispatch({ type: "CLICK_OPERATOR", payload: "+" });
          }}
        >
          +
        </button>
        <button onClick={() => dispatch({ type: "CLICK_PLUS_MINUS" })}>+/-</button>
        <button
          onClick={() => {
            dispatch({ type: "CLICK_OPERAND", payload: "0" });
          }}
        >
          0
        </button>
        <button onClick={() => dispatch({ type: "CLICK_POINT" })}>.</button>
        <button onClick={() => dispatch({ type: "CLICK_EQUAL" })}>=</button>
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

