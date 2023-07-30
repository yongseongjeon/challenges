import styled from "styled-components";

interface PiChartSectionInfo {
  color: string;
  name: string;
  score: string;
}

function PiChartSectionInfo({ color, name, score }: PiChartSectionInfo) {
  return (
    <Score>
      <Color color={color} />
      <span>{name}</span>
      <span>{score}</span>
    </Score>
  );
}

export default PiChartSectionInfo;

const Score = styled.div`
  width: fit-content;
  height: 2rem;
  border: 1px solid black;
  display: flex;
  padding: 0.5rem;
  gap: 0.5rem;
`;

const Color = styled.div<{ color: string }>`
  width: 1rem;
  height: 1rem;
  border: 1px solid black;
  background-color: ${({ color }) => color};
`;
