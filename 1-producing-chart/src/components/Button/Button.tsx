import styled from "styled-components";
import { COLOR } from "../../constants/color";

interface ButtonProps {
  name: string;
}

function Button({ name }: ButtonProps) {
  return <StyledButton type="button">{name}</StyledButton>;
}

export default Button;

const StyledButton = styled.button`
  width: fit-content;
  height: 3rem;
  border: 0;
  color: ${COLOR.WHITE};
  cursor: pointer;
  background-color: ${COLOR.BELIZE_HOLE};
  &:hover {
    background-color: ${COLOR.PETER_RIVER};
  }
`;
