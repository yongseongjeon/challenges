class NotificationModel {
  constructor() {
    this.notifications = [];
  }
  addNotification(notification) {
    this.notifications.push(notification);
  }
  removeNotification(notificationIndex) {
    this.notifications.filter((_, index) => notificationIndex !== index);
  }
}

export default NotificationModel;
