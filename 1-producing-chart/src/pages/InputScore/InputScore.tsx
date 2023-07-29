import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import PlayerName from "../../components/PlayerName/PlayerName";

function InputScore() {
  return (
    <>
      <Header />
      <PlayerName name="Alex" size="SMALL" />
      <Button name="Make chart" />
      <Input />
    </>
  );
}

export default InputScore;
