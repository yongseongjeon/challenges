import styled from "styled-components";

function BarChart() {
  return (
    <>
      <ChartContainer />
    </>
  );
}

export default BarChart;

const ChartContainer = styled.div`
  width: 24rem;
  height: 24rem;
  border: 1px solid black;
  border-radius: 10px;
`;
