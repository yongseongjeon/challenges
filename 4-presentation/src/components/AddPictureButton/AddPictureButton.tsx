import { MouseEvent } from "react";
import Button from "../common/Button/Button";

function AddPictureButton() {
  return <Button name="사진 추가" onClick={handleClick} />;
}

function handleClick(e: MouseEvent<HTMLButtonElement>) {
  console.log("Clicked 사진 추가 Button.");
}

export default AddPictureButton;
