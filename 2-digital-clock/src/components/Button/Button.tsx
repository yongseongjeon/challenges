import styled from "styled-components";
import { Color } from "../../style/color";

interface ButtonProps {
  title: string;
}

function Button({ title }: ButtonProps) {
  return <Container type="button">{title}</Container>;
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
