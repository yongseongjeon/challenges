class NotificationModel {
  constructor() {
    this.notifications = [];
    this.subscribers = [];
  }
  addNotification(notification) {
    this.notifications.push(notification);
    this.notify();
  }
  removeNotification(notificationIndex) {
    this.notifications = this.notifications.filter((_, index) => index !== +notificationIndex);
    this.notify();
  }
  notify() {
    this.subscribers.forEach((subscriber) => subscriber());
  }
  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }
}

export default NotificationModel;
