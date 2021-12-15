import User from "./user";
import NotificationCenter from './notificationCenter';

const user = new User('Bob');
const notificationCenter = new NotificationCenter(user, 'testMessage');

notificationCenter.notifyByEmail();
notificationCenter.notifyByOutlook();