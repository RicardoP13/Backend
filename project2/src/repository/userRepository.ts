import { User } from '../entities/user.entity';
import Repository from './repository';

class UserRepository {
  private genericRepository: Repository<User>;

  constructor() {
    this.genericRepository = new Repository<User>(User);
  }

  async getData() {
    return await this.genericRepository.findAll();
  }

  async saveData(data: any) {
    const userRecord = await User.create({
      nickname: data.nickname,
      first_name: data.first_name,
      last_name: data.last_name,
      value: data.value
    });
    return this.genericRepository.save(userRecord);
  }
}

const repository = new UserRepository();
export default repository;