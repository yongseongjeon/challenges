function ToastMessage({ id, type, message }) {
  return `<div class="toast-message">
            <div>${message}</div>
            <span class="close-button" data-id="${id}">X</span>
          </div>`;
}

export default ToastMessage;
