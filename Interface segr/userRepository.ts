import OpenRepository from "./openRepository";
import User from './user';

export default class UserRepository implements OpenRepository<User> {

    insert(user: User) {
      console.log('inserting user...')
    }

    update(user: User) {
      console.log('updating user...')
    }

    get(): User {
        return new User('1');
    }

    delete(id: string): void {
      console.log('deleting user...')
    }
}