function ToastMessage({ type, message, index }) {
  return `<div>
            <div>${message}</div>
            <span class="close-button" data-index="${index}">X</span>
          </div>`;
}

export default ToastMessage;
