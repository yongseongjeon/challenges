import { MouseEventHandler } from "react";
import styled from "styled-components";

interface ButtonProp {
  name: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

function Button({ name, onClick }: ButtonProp) {
  return (
    <StyledButton type="button" onClick={onClick}>
      {name}
    </StyledButton>
  );
}

export default Button;

const StyledButton = styled.button``;
