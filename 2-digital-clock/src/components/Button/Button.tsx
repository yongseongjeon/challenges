import styled from "styled-components";
import { Color } from "../../style/color";
import { MouseEventHandler } from "react";

interface ButtonProps {
  title: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

function Button({ title, onClick }: ButtonProps) {
  return (
    <Container type="button" onClick={onClick}>
      {title}
    </Container>
  );
}

export default Button;

const Container = styled.button`
  width: 5rem;
  height: 4rem;
  border-radius: 20px;
  background-color: ${Color.WHITE};
  border: 2px solid ${Color.BLACK};
  font-size: 1.25rem;

  &:active {
    background-color: ${Color.CLOUDS};
  }
`;
