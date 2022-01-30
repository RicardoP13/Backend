import repository from '../repository/userRepository'

class UserController{

	contructor(){}

	async getAData() {
		const response = await repository.getData();
		return response;
	}

	async saveData(data: any) {
		const response = await repository.saveData(data);
		return response;
	}

}

const userController = new UserController();
export default userController;