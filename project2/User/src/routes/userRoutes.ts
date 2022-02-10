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
    this.router.get('/', this.getUsersSimple);
    this.router.post('/', this.addUser);
    this.router.patch('/', this.updateUserAttendances);
    this.router.delete('/', this.deleteUser);
    this.router.get('/attendance', this.getUserAttendances);
  }

  async getUsersSimple(request:Request, response:Response){
    let data
    try{
      if(!!request.query.nickname || !!request.query.name){
        data = await Controller.filterData(request.query);
      }
      else {
        data = await Controller.getDataSimple();
        if(data.length<1){
          throw "No records in database";
        }
      }
      response.status(200).json({
        message: 'Users finded successfully',
        data: data
      });
    }
    catch(error) {
      response.status(400).json({
        message: error
      });
    }
  }

  async addUser(request:Request, response:Response){
    try{
      if(!request.body.nickname || !request.body.name){
        throw "Please send all required fields";
      }
      const user = await Controller.saveData(request.body);
      response.status(201).json({
        message : 'User created successfully',
        data: user
      });
    } 
    catch (error){
      response.status(400).json({
        message : error
      });
    }
  }

  async deleteUser(request:Request, response:Response){
    const data = await Controller.deleteData(request.body);
    if(data > 0) {
      response.status(200).json({
        message : 'User deleted successfully'
      });
    }
    else {
      response.status(404).json({
        message : 'User not found'
      });
    }
  }

  async updateUserAttendances(request:Request, response:Response){
    try{
      const data = await Controller.updateField(request.body);
      response.status(200).json({
        message : 'User updated successfully',
        data: data
      });
    } 
    catch (error){
      response.status(400).json({
        message : error
      });
    }
  }

  async getUserAttendances(request:Request, response:Response) {
    const data = await Controller.getRemoteData(request.query); 
    response.status(200).json({
      message : 'User found successfully',
      data : data
    });
  }

}

const userRoutes = new UserRoutes();
export default userRoutes.router;