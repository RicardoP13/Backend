import Pawn from '../models/pawn';
import Knight from '../models/knight';
import Rook from '../models/rook';
import Bishop from '../models/bishop';


class InstanceController {
	constructor(){}
	instancePiece(piece: any){
		switch(piece.type){
			case 'knight':
				return new Knight(piece.type, piece.color, piece.position, piece.status);
				break;
			case 'rook':
				return new Rook(piece.type, piece.color, piece.position, piece.status);
				break;
			case 'bishop':
				return new Bishop(piece.type, piece.color, piece.position, piece.status);
				break;
			default:
				return new Pawn(piece.type, piece.color, piece.position, piece.status);
				break;
		}
	}
}

const instanceController = new InstanceController();
export default instanceController;