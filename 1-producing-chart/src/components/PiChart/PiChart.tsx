import styled from "styled-components";
import Header from "../Header/Header";
import Button from "../../components/Button/Button";
import ToggleButton from "../../components/ToggleButton/ToggleButton";
import PiChartSectionInfo from "../../components/PiChartSectionInfo/PiChartSectionInfo";

function PiChart() {
  return (
    <>
      <ChartContainer />
      <Scores>
        <PiChartSectionInfo color="red" name="Alex" score="1000" />
        <PiChartSectionInfo color="red" name="Alex" score="1000" />
        <PiChartSectionInfo color="red" name="Alex" score="1000" />
        <PiChartSectionInfo color="red" name="Alex" score="1000" />
        <PiChartSectionInfo color="red" name="Alex" score="1000" />
      </Scores>
    </>
  );
}

export default PiChart;

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
