import repository from '../repository/userRepository'

class UserController{

	contructor(){}

	async getDataSimple() {
		const response = await repository.getDataSimple();
		return response;
	}

	async filterData(data: any) {
		const response = await repository.filterData(data);
		return response;	
	}

	async saveData(data: any) {
		const response = await repository.saveData(data);
		return response;
	}

	async deleteData(data: any) {
		const response = await repository.deleteData(data);
		return response;
	}

	async updateField(data: any) {
		const response = await repository.updateField(data);
		return response
	}

	async getRemoteData(data: any) {
		const response = await repository.getRemoteData(data);
		return response;
	}

}

const userController = new UserController();
export default userController;