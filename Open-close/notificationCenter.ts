import notificationHub from "./notificationHub";

export default class NotificationCenter extends notificationHub {

    constructor(user: any, message: string) {
      super(user, message);
    }

    notifyByEmail(){
        console.log(`Notify by email to ${this.user.name} message: ${this.message}...`);
    }

    notifyBySms(){
        console.log(`Notify by SMS to ${this.user.name} message: ${this.message}...`);
    }
}