import styled from "styled-components";
import { Color } from "../../style/color";
import { Dispatch, SetStateAction } from "react";

interface SwitchProps {
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
}

function Switch({ state, setState }: SwitchProps) {
  function toggleState() {
    setState(!state);
  }

  return (
    <Container>
      <Checkbox id="switch" type="checkbox" checked={state} onChange={toggleState}></Checkbox>
      <Rect />
      <Background htmlFor="switch" />
    </Container>
  );
}

export default Switch;

const Container = styled.div`
  position: relative;
`;

const Checkbox = styled.input`
  width: 5rem;
  height: 2.5rem;
  margin: 0;
  opacity: 0;
`;

const Rect = styled.span`
  width: 2.7rem;
  height: 2.2rem;
  border: 1px solid ${Color.BLACK};
  background-color: ${Color.SILVER};
  position: absolute;
  top: 0.3rem;
  left: 0.3rem;
  border-radius: 10px;
  transition: 0.15s;

  ${Checkbox}:checked ~ & {
    transform: translateX(3rem);
  }
`;

const Background = styled.label`
  width: 6.3rem;
  height: 2.8rem;
  border: 1px solid ${Color.BLACK};
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 10px;
  cursor: pointer;
`;
