import GameController from './gameController';
import PieceController from  './pieceController';

class MainController{
	contructor(){}
	
	async getTable(){
		return await GameController.getTable();
	}

	async restartGame(){
		const board = await PieceController.restart();
		return await GameController.restart(board);
	}

	async movePiece(position: Array<number>, new_position: Array<number>){
		const last_move_color = await GameController.getLastMove();
		const piece_moved = await PieceController.move(position, new_position, last_move_color);

		if(piece_moved !== 'unchanged') {
			const pieces = await PieceController.getPieces();
			const board = PieceController.getBoard(pieces);
			const new_last_move_color = last_move_color === "B" ? "W" : "B";
			GameController.updateStatus(board, new_last_move_color);
		}

		return piece_moved;
	}

}

const mainController = new MainController();
export default mainController;