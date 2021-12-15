import EventLog from "./eventLog";
import Repository from "./repository";
import User from './user';

export default class LogRepository implements Repository<EventLog> {

     insert(user: EventLog) {
         //none
     }

    update(user: EventLog) {
        //none
    }

    get(): EventLog {
        return new EventLog('1', 'test message');
    }

    delete(id: string): void {
        //none
    }
}