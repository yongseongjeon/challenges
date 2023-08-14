import { $, $All } from "../util.js";
import Button from "./Button.js";
import ToastMessage from "./ToastMessage.js";

class NotificationView {
  setHandler({ onClickHandler, onCloseHandler }) {
    this.onClickHandler = onClickHandler;
    this.onCloseHandler = onCloseHandler;
  }
  template({ notifications }) {
    return `<div class="buttons">
              ${Button({ type: "success", title: "Success" })}
              ${Button({ type: "info", title: "Info" })}
              ${Button({ type: "warning", title: "Warning" })}
              ${Button({ type: "error", title: "Error" })}
            </div>
            <div class="toast-message-container">
              ${notifications
                .map(({ id, type, message }) => ToastMessage({ id, type, message: `${message} toast notification.` }))
                .join("")}
            </div>`;
  }
  render({ notifications }) {
    $("body").innerHTML = this.template({ notifications });
    this.setEvent();
  }
  setEvent() {
    $(".buttons").addEventListener("click", (e) => {
      const [type] = e.target.className.split("-");
      this.onClickHandler({ type, message: `${type} toast notifications` });
    });
    $All(`.close-button`).forEach((el) => {
      el.addEventListener("click", (e) => {
        const id = +e.target.dataset.id;
        this.onCloseHandler({ id });
      });
    });
  }
}

export default NotificationView;
