import {Request,Response,Router} from 'express';

import ChessTable from '../models/table';

class GameRoutes{
  public router : Router;
  constructor(){
    this.router = Router();
    this.routes();
  }

  async getTable(request:Request, response:Response){
    const table = await ChessTable.find();
    response.json(table);
  }

  //DEVELOPING FUNCTIONS
  async createTable(request:Request, response:Response){
    const {id,fields} = request.body;
    const newTable = new ChessTable({id,fields});
    await newTable.save();
    console.log(newTable);
    response.json('recieved');
  }
  async del(request:Request, response:Response){
    const {id,fields} = request.body;
    const table = await ChessTable.findOneAndDelete({id});
    response.json('deleted');

  }

  routes(){
    this.router.get('/game', this.getTable);
    //DEV ROUTES
    this.router.post('/game', this.createTable);
    this.router.delete('/game', this.del);
  }
}

const gameRoutes = new GameRoutes();
export default gameRoutes.router;