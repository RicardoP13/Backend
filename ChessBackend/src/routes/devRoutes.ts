import {Request,Response,Router} from 'express';

import ChessTable from '../models/game';
import ChessPiece from '../models/piece';
import Controller from '../controllers/mainController'

class DevRoutes{
  public router : Router;
  constructor(){
    this.router = Router();
    this.routes();
  }

  async getPieces(request:Request, response:Response){
    const pieces = await ChessPiece.find();
    response.json(pieces);
  }

  async del(request:Request, response:Response){
    const {color} = request.body;
    const table = await ChessPiece.findOneAndDelete({color});
    response.json(table);

  }

  async createPiece(request:Request, response:Response){
    const {type,position,color,status,valid_moves} = request.body;
    const newPiece = new ChessPiece({type,position,color,status,valid_moves});
    await newPiece.save();
    console.log(newPiece);
    response.json('recieved');
  }

  async updatepiece(request:Request, response:Response){
    const{position} = request.body;
    const piece = await ChessPiece.findOneAndUpdate({position},{position: [0,0]});
    const pieces = await ChessPiece.find();
    response.json(pieces); 
  }

  routes(){
    this.router.get('/', this.getPieces);
    this.router.post('/', this.createPiece);
    this.router.delete('/', this.del);
    this.router.put('/', this.updatepiece);

  }
}

const devRoutes = new DevRoutes();
export default devRoutes.router;