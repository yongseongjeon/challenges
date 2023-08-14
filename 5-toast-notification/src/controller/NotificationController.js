class NotificationController {
  constructor({ model, view }) {
    this.model = model;
    this.view = view;

    this.view.render({ notifications: this.model.notifications });
  }
}

export default NotificationController;
