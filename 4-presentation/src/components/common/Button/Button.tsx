import { MouseEventHandler } from "react";
import styled from "styled-components";
import { CommonStyle } from "../../../styles/commonStyle";
import { Color } from "../../../styles/color";

interface ButtonProp {
  name: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

function Button({ name, onClick }: ButtonProp) {
  return (
    <StyledButton type="button" onClick={onClick}>
      {name}
    </StyledButton>
  );
}

export default Button;

const StyledButton = styled.button`
  padding: 1rem;
  ${CommonStyle.BlackBorder}
  ${CommonStyle.BorderRadius}

  font-size: 1rem;
  font-weight: 700;

  background-color: ${Color.GreenDarnerTail};
  &:hover {
    background-color: ${Color.ElectronBlue};
  }
`;
