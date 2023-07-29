import styled from "styled-components";

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
  color: #fff;
  cursor: pointer;
  background-color: #2980b9;
  &:hover {
    background-color: #3498db;
  }
`;
