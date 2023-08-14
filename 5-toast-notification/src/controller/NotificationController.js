class NotificationController {
  constructor({ model, view }) {
    this.model = model;
    this.view = view;
    this.handler = this.handler.bind(this);

    this.view.setHandler({ onClickHandler: this.handler });
    this.view.render({ notifications: this.model.notifications });
  }

  handler({ type, message }) {
    this.model.addNotification({ type, message });
    this.view.render({ notifications: this.model.notifications });
  }
}

export default NotificationController;
