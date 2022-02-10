import { User } from '../entities/user.entity';
import Repository from './repository';
import AttendanceService from '../services/attendanceService';

class UserRepository {
  private genericRepository: Repository<User>;

  constructor() {
    this.genericRepository = new Repository<User>(User);
  }

  async getDataSimple() {
    return await this.genericRepository.findAllSimple();
  }

  async filterData(data: any) {
    return await this.genericRepository.filterAll([
      {
        nickname : data.nickname
      },
      {
        name : data.name
      }
    ]); 
  }

  async saveData(data: any) {
    const userRecord = await User.create({
      nickname: data.nickname,
      name: data.name
    });
    return this.genericRepository.save(userRecord);
  }

  async deleteData(data: any) {
    return await this.genericRepository.delete(data.id);
  }

  async updateField(data: any) {
    const userRecord = await this.genericRepository.findById(data.id);
    userRecord.attendances = data.attendances;
    const updatedUser = await this.genericRepository.save(userRecord);
    return updatedUser;

  }

  async getRemoteData(data: any) {
    const user = await this.genericRepository.findById(data.id);
    const attendances = await AttendanceService.getAttendances(data.id);
    const response ={
      ...user,
      listOfAttendances : attendances
    };
    return response;
  }

}

const repository = new UserRepository();
export default repository;