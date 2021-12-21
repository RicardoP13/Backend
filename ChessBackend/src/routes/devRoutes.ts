import {Request,Response,Router} from 'express';

import ChessTable from '../models/table';
import ChessPiece from '../models/piece';
import movesController from '../controllers/moveValidator'

class DevRoutes{
  public router : Router;
  constructor(){
    this.router = Router();
    this.routes();
  }

  async getPieces(request:Request, response:Response){
    const table = await ChessPiece.find();
    response.json(table);
  }

  async createPiece(request:Request, response:Response){
    const {type,position,color,status} = request.body;
    const valid_moves = movesController.generateValidMoves(type,position)
    const newPiece = new ChessPiece({type,position,color,status,valid_moves});
    await newPiece.save();
    console.log(newPiece);
    response.json('recieved');
  }

  routes(){
    this.router.get('/', this.getPieces);
    this.router.post('/', this.createPiece);
  }
}

const devRoutes = new DevRoutes();
export default devRoutes.router;