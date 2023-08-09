import InputFile from "../common/InputFile/InputFile";

function AddPictureButton() {
  const allowedFileExtention = ".png, .jpeg";

  return <InputFile name="사진 추가" onClick={handleClick} accept={allowedFileExtention} />;
}

function handleClick() {
  console.log("Clicked 사진 추가 InputFile.");
}

export default AddPictureButton;
