import {Request,Response,Router} from 'express';
import DatabaseConnection from '../shared/databaseConnection';
import Controller from '../controller/userController';

class UserRoutes{
  
  public router : Router;
  connection: DatabaseConnection;

  constructor(){
    this.router = Router();
    this.routes();
    this.connection = new DatabaseConnection();
  }

  routes(){
    this.router.get('/', this.getUsers);
    this.router.post('/', this.addUser);
  }

  async getUsers(request:Request, response:Response){
    const data = await Controller.getAData();
    response.json({
    	status: 200,
    	message: data});
  }

  async addUser(request:Request, response:Response){
    const data = await Controller.saveData(request.body)
    response.json({
    	status: 200,
    	message: data});
  }

}

const userRoutes = new UserRoutes();
export default userRoutes.router;