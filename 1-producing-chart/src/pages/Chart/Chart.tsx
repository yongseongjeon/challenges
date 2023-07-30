import styled from "styled-components";
import Button from "../../components/Button/Button";
import ToggleButton from "../../components/ToggleButton/ToggleButton";
import Header from "../../components/Header/Header";

function Chart() {
  return (
    <Wrapper>
      <Header />
      <Buttons>
        <Button name="back" />
        <ToggleButton />
      </Buttons>
      <ChartContainer />
      <Scores>
        <Score>Alex</Score>
        <Score>Alex</Score>
        <Score>Alex</Score>
        <Score>Alex</Score>
        <Score>Alex</Score>
      </Scores>
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

const ChartContainer = styled.div`
  width: 24rem;
  height: 24rem;
  border: 1px solid black;
  border-radius: 10px;
`;

const Scores = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Score = styled.div`
  width: 4.5rem;
  height: 2rem;
  border: 1px solid black;
`;
