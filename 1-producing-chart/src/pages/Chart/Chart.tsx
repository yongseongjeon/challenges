import styled from "styled-components";
import Button from "../../components/Button/Button";
import ToggleButton from "../../components/ToggleButton/ToggleButton";
import PiChart from "../../components/PiChart/PiChart";
import Header from "../../components/Header/Header";
import { useState } from "react";
import BarChart from "../../components/BarChart/BarChart";

function Chart() {
  const [isBarStatus, setIsBarStatus] = useState(false);
  return (
    <Wrapper>
      <Header />
      <Buttons>
        <Button name="back" />
        <ToggleButton isBarStatus={isBarStatus} setIsBarStatus={setIsBarStatus} />
      </Buttons>
      {isBarStatus ? <BarChart /> : <PiChart />}
    </Wrapper>
  );
}

export default Chart;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 26rem;
  padding: 1rem;
`;

const Buttons = styled.div`
  display: flex;
  gap: 6rem;
`;
