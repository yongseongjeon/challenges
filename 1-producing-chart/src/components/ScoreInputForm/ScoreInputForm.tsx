import styled from "styled-components";
import PlayerName from "../PlayerName/PlayerName";
import Input from "../Input/Input";

interface ScoreInputForm {
  name: string;
}

function ScoreInputForm({ name }: ScoreInputForm) {
  return (
    <Wrapper>
      <PlayerName name={name} size="MEDIUM" />
      <Input />
    </Wrapper>
  );
}

export default ScoreInputForm;

const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
`;
