import styled from "styled-components";
import { useState } from "react";
import Switch from "../../components/Switch/Switch";
import NumberDisplay from "../../components/NumberDisplay/NumberDisplay";
import { Color } from "../../style/color";
import Button from "../../components/Button/Button";

function Home() {
  const [isTimerMode, setIsTimerMode] = useState<boolean>(false);
  const isClockMode = !isTimerMode;

  return (
    <Container>
      {isClockMode && (
        <>
          <NumberDisplay time="1200" />
        </>
      )}
      {isTimerMode && (
        <>
          <NumberDisplay time="0015" />
        </>
      )}
      <ControlPanel>
        <SwitchContainer>
          <TextContainer>
            <span>Clock</span>
            <span>Timer</span>
          </TextContainer>
          <Switch state={isTimerMode} setState={setIsTimerMode} />
        </SwitchContainer>
        <Buttons>
          {isClockMode && (
            <>
              <Button title="12" />
              <Button title="24" />
            </>
          )}
          {isTimerMode && (
            <>
              <Button title="start" />
              <Button title="pause" />
              <Button title="reset" />
            </>
          )}
        </Buttons>
      </ControlPanel>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  margin: auto auto;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 5rem;
  width: 40rem;
  height: 25rem;
  border: 3px solid ${Color.BLACK};
  border-radius: 20px;
  padding-left: 4.5rem;
`;

const ControlPanel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 6.5rem;
`;

const SwitchContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Buttons = styled.div`
  display: flex;
  gap: 1rem;
  border: 2px solid ${Color.BLACK};
  padding: 0.5rem;
  border-radius: 20px;
`;
