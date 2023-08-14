import { $ } from "../util.js";
import Button from "./Button.js";
import ToastMessage from "./ToastMessage.js";

class NotificationView {
  template({ notifications }) {
    return `<div class="buttons">
              ${Button({ title: "Success" })}
              ${Button({ title: "Info" })}
              ${Button({ title: "Warning" })}
              ${Button({ title: "Error" })}
            </div>
            <div class="toast-message-container">
              ${notifications.map(({ type, message }) => ToastMessage({ type, message: `${message} toast notification.` })).join("")}
            </div>`;
  }
  render({ notifications }) {
    $("body").innerHTML = this.template({ notifications });
    this.setEvent();
  }
  setEvent() {}
}

export default NotificationView;
