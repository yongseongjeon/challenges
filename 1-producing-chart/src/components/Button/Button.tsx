import styled from "styled-components";
import { COLOR } from "../../constants/color";
import { MouseEventHandler } from "react";

interface ButtonProps {
  name: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

function Button({ name, onClick }: ButtonProps) {
  return (
    <StyledButton type="button" onClick={onClick}>
      {name}
    </StyledButton>
  );
}

export default Button;

const StyledButton = styled.button`
  width: 10rem;
  height: 3rem;
  border: 0;
  border-radius: 10px;
  color: ${COLOR.WHITE};
  cursor: pointer;
  background-color: ${COLOR.BELIZE_HOLE};
  &:hover {
    background-color: ${COLOR.PETER_RIVER};
  }
`;
