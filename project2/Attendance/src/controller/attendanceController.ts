import repository from '../repository/attendanceRepository'
import publishAttendance from '../services/rabbitService'

class AttendanceController{

	contructor(){}

	async getData(data: any) {
		const response = await repository.getData(data);
		return response;
	}

	async saveData(data: any) {
		const response = await repository.saveData(data);
		publishAttendance(response);
		return response;
	}

	async deleteData(data: any) {
		const response = await repository.deleteData(data);
		publishAttendance(response);
		return response;	
	}

}

const attendanceController = new AttendanceController();
export default attendanceController;