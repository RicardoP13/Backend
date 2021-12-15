import User from './user'
import UserRepository from './userRepository'
import LogRepository from './LogRepository'

const user = new User('aBc');
const userRepo = new UserRepository();

userRepo.insert(user);
console.log(userRepo.get());

const logRepo = new LogRepository();
console.log(logRepo.get());