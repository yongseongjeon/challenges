import styled from "styled-components";
import { COLOR } from "../../constants/color";
import { Dispatch, SetStateAction } from "react";

interface ToggleButtonProps {
  isBarStatus: boolean;
  setIsBarStatus: Dispatch<SetStateAction<boolean>>;
}

function ToggleButton({ isBarStatus, setIsBarStatus }: ToggleButtonProps) {
  function handleClickToggleButton() {
    setIsBarStatus(!isBarStatus);
  }
  return (
    <Wrapper>
      <StyledToggleButton type="checkbox" checked={isBarStatus} onChange={handleClickToggleButton}></StyledToggleButton>
      <Rect isBarStatus={isBarStatus}>{isBarStatus ? "Bar" : "Pi"}</Rect>
      <BackgroundBar />
    </Wrapper>
  );
}

export default ToggleButton;

const Wrapper = styled.div`
  position: relative;
`;
const StyledToggleButton = styled.input`
  width: 8rem;
  height: 2.5rem;
  margin: 0;
  opacity: 0;
  border: 1px solid black;
  cursor: pointer;
  position: absolute;
  z-index: 2;
`;
const Rect = styled.div<{ isBarStatus: boolean }>`
  width: 4rem;
  height: 2.5rem;
  border: 1px solid black;
  position: absolute;
  background-color: ${COLOR.WHITE};
  z-index: 1;
  transform: ${({ isBarStatus }) => (isBarStatus ? "translateX(4rem)" : "")};
  transition: 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;
const BackgroundBar = styled.div`
  width: 8rem;
  height: 2.5rem;
  border: 1px solid black;
  position: absolute;
  background-color: ${COLOR.GREY};
  border-radius: 10px;
`;
