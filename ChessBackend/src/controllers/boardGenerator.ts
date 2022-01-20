import ChessPiece from '../models/piece';


class BoardGenerator{
	constructor(){}
	generate(pieces:Array<any>){
		const board = [['o','o','o','o','o','o','o','o'],
			['o','o','o','o','o','o','o','o'],
			['o','o','o','o','o','o','o','o'],
			['o','o','o','o','o','o','o','o'],
			['o','o','o','o','o','o','o','o'],
			['o','o','o','o','o','o','o','o'],
			['o','o','o','o','o','o','o','o'],
			['o','o','o','o','o','o','o','o']];
		pieces.forEach(piece => 
			{	if (piece.status){
					board[piece.position[0]][piece.position[1]] = piece.color.substring(0,1) + piece.type;
				}
			})
		return board;
	}
}

const boardGenerator = new BoardGenerator();
export default boardGenerator;