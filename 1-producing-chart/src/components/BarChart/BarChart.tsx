import { useContext } from "react";
import styled from "styled-components";
import { ScoreContext } from "../../store/ScoreContext";
import { Player } from "../../types/Player";
import Bar from "../Bar/Bar";

function BarChart() {
  const { scores } = useContext(ScoreContext);
  const height = 300;
  const barWidth = 30;
  const barGap = 47;
  const maxScore = getMaxScore(scores);

  return (
    <ChartContainer>
      <svg width={(barWidth + barGap) * scores.length} height={height}>
        {scores.map((player: Player, i: number) => {
          const barHeight = scaleValue(+player.score, maxScore);
          return (
            <Bar
              key={player.name}
              x={i * (barWidth + barGap) + 20}
              y={height - barHeight}
              width={barWidth}
              height={barHeight}
              color={player.color}
            />
          );
        })}
      </svg>
    </ChartContainer>
  );
}

export default BarChart;

const ChartContainer = styled.div`
  width: 24rem;
  height: 24rem;
  border: 1px solid black;
  border-radius: 10px;
`;

function scaleValue(oldValue: number, oldMax: number) {
  const newMax = 300;
  const newValue = (oldValue / oldMax) * newMax;
  return newValue;
}

function getMaxScore(players: Player[]) {
  let maxScore = -Infinity;
  players.map((player: Player) => {
    if (+player.score >= maxScore) {
      maxScore = +player.score;
    }
  });
  return maxScore;
}
