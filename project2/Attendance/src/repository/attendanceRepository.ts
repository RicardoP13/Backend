import Repository from './repository';

class AttendanceRepository {

  constructor() { }

  async getData(data: any) {
    if(!data.id){
      return await Repository.findAll();
    }
    return await Repository.filter({idUser: data.id});
  }

  async saveData(data: any) {
    return await Repository.save(data);
  }

  async deleteData(data: any) {
    return await Repository.delete(data);
  }

}

const repository = new AttendanceRepository();
export default repository;