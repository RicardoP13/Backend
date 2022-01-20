import {Request,Response,Router} from 'express';

import ChessGame from '../models/game';
import Controller from '../controllers/mainController'


class GameRoutes{
  
  public router : Router;
  
  constructor(){
    this.router = Router();
    this.routes();
  }

  async getTable(request:Request, response:Response){
    response.json(await Controller.getTable());
  }

  async postGame(request:Request, response:Response){
    response.json(await Controller.restartGame());
  }

  async putPiece(request:Request, response:Response){
    const {position,new_position} = request.body;
    response.json(await Controller.movePiece(position,new_position));
  }

  async del(request:Request, response:Response){
    const {id,fields} = request.body;
    const table = await ChessGame.findOneAndDelete({id});
    response.json('deleted');
  }

  routes(){
    this.router.get('/', this.getTable);//List
    this.router.post('/', this.postGame); //restart
    this.router.put('/', this.putPiece); //move
  }
}

const gameRoutes = new GameRoutes();
export default gameRoutes.router;