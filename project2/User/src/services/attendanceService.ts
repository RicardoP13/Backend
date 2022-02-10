import axios from 'axios';

class AttendanceService {
	async getAttendances(userId: string) {
		return axios
		 .get(`http://localhost:3000/attendance/?id=${userId}`)
		 .then((res) => res.data.data)
		 .catch((err) => console.log(err))
	}
}

const service = new AttendanceService();
export default service;