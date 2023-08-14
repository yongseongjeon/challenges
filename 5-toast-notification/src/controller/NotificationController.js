class NotificationController {
  constructor({ model, view }) {
    this.model = model;
    this.view = view;
    this.handler = this.handler.bind(this);
    this.removeNotification = this.removeNotification.bind(this);

    this.view.setHandler({ onClickHandler: this.handler, onCloseHandler: this.removeNotification });
    this.model.subscribe(() => this.view.render({ notifications: this.model.notifications }));
    this.view.render({ notifications: this.model.notifications });
  }
  handler({ type, message }) {
    this.model.addNotification({ type, message });
  }
  removeNotification({ index }) {
    this.model.removeNotification(index);
  }
}

export default NotificationController;
