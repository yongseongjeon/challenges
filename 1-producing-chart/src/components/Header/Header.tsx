import { styled } from "styled-components";
import { COLOR } from "../../constants/color";

function Header() {
  return (
    <StyledHeader>
      <h1>Game Score Chart</h1>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.header`
  width: 24rem;
  height: 5rem;
  border: 1px solid ${COLOR.BLACK};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;
