import { styled } from "styled-components";

function Header() {
  return (
    <StyledHeader>
      <h1>Game Score Chart</h1>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.header`
  width: 30rem;
  height: 5rem;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;
