import User from "./user";

export default class notificationHub{
  constructor(protected user: User, protected message: string){ 
  }
  
  notifyByGmail(){
    console.log(`Notify by gmail to ${this.user.name} message: ${this.message}...`);
  }

  notifyByOutlook(){
    console.log(`Notify by outlook to ${this.user.name} message: ${this.message}...`);
  }
  
}