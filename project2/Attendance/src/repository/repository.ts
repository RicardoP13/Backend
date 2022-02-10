import Attendance from '../models/attendance';

class Repository {

  constructor() { }

  async findAll() {
    return await Attendance.find();
  }

  async filter(conditions: any) {
    return await Attendance.find(conditions); 
  }

  async save(data: any) {
    const {startTime,endTime,idUser,notes} = data;
    const newAttendance = new Attendance (data);
    await newAttendance.save();
    return newAttendance;
  }

  async delete(data: any) {
    return await Attendance.findOneAndDelete({_id: data.id});
  }

}

const repository = new Repository();
export default repository;