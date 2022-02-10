import {Request,Response,Router} from 'express';

import Controller from '../controller/attendanceController';

class AttendanceRoutes{
  
  public router : Router;

  constructor(){
    this.router = Router();
    this.routes();
  }

  routes(){
    this.router.get('/', this.getAttendances);
    this.router.post('/', this.addAttendance);
    this.router.delete('/', this.deleteAttendance);
  }
  
  async getAttendances(request:Request, response:Response){
  	const attendances = await Controller.getData(request.query);
  	response.status(201).json({
  		message : 'List made successfully',
  		data: attendances
    });
  }

  async addAttendance(request:Request, response:Response){
  	const data = await Controller.saveData(request.body)
  	response.status(201).json({
  		message : 'attendance added successfully',
  		data: data
    });	
  }

  async deleteAttendance(request:Request, response:Response) {
    const data = await Controller.deleteData(request.body)
  	response.status(201).json({
  		message : 'attendance added successfully',
  		data: data
    });	
  }
}

const attendanceRoutes = new AttendanceRoutes();
export default attendanceRoutes.router;