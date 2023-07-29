import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { COLOR } from "../../constants/color";

function Input() {
  const [value, setValue] = useState("");
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const changedValue = e.target.value;
    setValue(changedValue);
  }
  return <StyledInput type="number" value={value} onChange={handleChange} placeholder="fill in the score" />;
}

export default Input;

const StyledInput = styled.input`
  width: 10rem;
  height: 3rem;
  border: 1px solid ${COLOR.BLACK};
  text-align: center;
`;
