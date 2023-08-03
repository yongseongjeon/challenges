import styled from "styled-components";
import { useEffect, useState } from "react";
import Switch from "../../components/Switch/Switch";
import NumberDisplay from "../../components/NumberDisplay/NumberDisplay";
import { Color } from "../../style/color";
import Button from "../../components/Button/Button";

function Home() {
  const [isTimerMode, setIsTimerMode] = useState<boolean>(false);
  const isClockMode = !isTimerMode;
  const [curTime, setCurTime] = useState<string>("0000");
  const [clockMode, setClockMode] = useState<"12" | "24">("12");
  const [stopwatch, setStopwatch] = useState<string>("0000");
  const [stopwatchIntervalId, setStopwatchIntervalId] = useState<NodeJS.Timer>();

  useEffect(() => {
    const sec = new Date().getSeconds();
    const timeUntilNextMinute = (60 - sec) * 1_000;
    const ONE_MINUTE_MS = 60_000;
    updateCurTime();

    const timeoutId = setTimeout(() => {
      updateCurTime();
      const intervalId = setInterval(updateCurTime, ONE_MINUTE_MS);

      return () => {
        clearInterval(intervalId);
      };
    }, timeUntilNextMinute);

    return () => {
      clearTimeout(timeoutId);
    };

    function updateCurTime() {
      const now = new Date();
      const curHour = now.getHours();
      const hourIn12HourFormat = convertToHourIn12HourFormat(curHour);
      const twoDigitHour = clockMode === "12" ? convertToTwoDigit(hourIn12HourFormat) : convertToTwoDigit(curHour);
      const curMinute = now.getMinutes();
      const twoDigitMinute = convertToTwoDigit(curMinute);
      const fourDigitCurTime = `${twoDigitHour}${twoDigitMinute}`;
      setCurTime(fourDigitCurTime);
    }

    function convertToHourIn12HourFormat(hour: number) {
      return hour % 12 === 0 ? 12 : hour % 12;
    }
  }, [clockMode]);
  function convertToTwoDigit(number: number) {
    return number.toString().padStart(2, "0");
  }

  function getMeridiemIndicator() {
    if (clockMode === "24") {
      return;
    }
    const curHour = new Date().getHours();
    return curHour < 12 ? "AM" : "PM";
  }

  function plusOneSecond(time: string) {
    const curMinute = Number(time.slice(0, 2));
    const curSecond = Number(time.slice(2, 4)) + 1;
    if (curSecond >= 60) {
      return `${convertToTwoDigit(curMinute + 1)}00`;
    }
    return `${convertToTwoDigit(curMinute)}${convertToTwoDigit(curSecond)}`;
  }

  return (
    <Container>
      {isClockMode && (
        <>
          <NumberDisplay time={curTime} />
          <AmPmIndicator>{getMeridiemIndicator()}</AmPmIndicator>
        </>
      )}
      {isTimerMode && <NumberDisplay time={stopwatch} />}
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
              <Button
                title="12"
                onClick={() => {
                  setClockMode("12");
                }}
              />
              <Button
                title="24"
                onClick={() => {
                  setClockMode("24");
                }}
              />
            </>
          )}
          {isTimerMode && (
            <>
              <Button
                title="start"
                onClick={() => {
                  const intervalId = setInterval(() => {
                    setStopwatch((prevStopwatch) => plusOneSecond(prevStopwatch));
                  }, 1_000);
                  setStopwatchIntervalId(intervalId);
                }}
              />
              <Button
                title="pause"
                onClick={() => {
                  clearInterval(stopwatchIntervalId);
                }}
              />
              <Button
                title="reset"
                onClick={() => {
                  setStopwatch("0000");
                }}
              />
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
  justify-content: space-between;
  padding: 2rem;
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

const AmPmIndicator = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
  margin-left: 30rem;
`;
