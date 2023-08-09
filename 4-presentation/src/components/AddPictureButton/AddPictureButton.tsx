import InputFile from "../common/InputFile/InputFile";

function AddPictureButton() {
  return <InputFile name="사진 추가" onClick={handleClick} />;
}

function handleClick() {
  console.log("Clicked 사진 추가 InputFile.");
}

export default AddPictureButton;
