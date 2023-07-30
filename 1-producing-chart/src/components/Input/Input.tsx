import { ChangeEvent, useContext } from "react";
import styled from "styled-components";
import { COLOR } from "../../constants/color";
import { ScoreContext } from "../../store/ScoreContext";
import { setScores } from "../../store/scoreReducer";

interface InputProps {
  name: string;
}

function Input({ name }: InputProps) {
  const { scores, dispatch } = useContext(ScoreContext);
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const changedValue = e.target.value;
    dispatch(setScores({ name, score: changedValue }));
  }
  return <StyledInput type="number" value={scores[name]} onChange={handleChange} placeholder="fill in the score" />;
}

export default Input;

const StyledInput = styled.input`
  width: 10rem;
  height: 3rem;
  border: 1px solid ${COLOR.BLACK};
  text-align: center;
  border-radius: 10px;
`;
