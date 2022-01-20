import ChessPiece from '../models/piece';
import BoardGenerator from './boardGenerator';
import InstanceController from './instanceController';

class PieceController{
	contructor(){}

	async getPieces(){
		return await ChessPiece.find();
	}

	async getPiece(position: Array<number>){
		return await ChessPiece.findOne({position});
	}

	getBoard(pieces: Array<any>) {
		return BoardGenerator.generate(pieces);
	}

	async killPiece(position: Array<number>) {
		await ChessPiece.findOneAndUpdate({position: position},{status: false});
	}

	async restart() {
		const old_pieces = await this.getPieces();
		old_pieces.forEach( async (piece: any) => 
			await ChessPiece.findOneAndUpdate({position: piece.position},{position: piece.initial_position, status: true}));
		const new_pieces = await this.getPieces();
		return BoardGenerator.generate(new_pieces);
	}
	
	async move(position: Array<number>, new_position: Array<number>, last_move_color: String) {
		const record = await this.getPiece(position);
		if(!!record && 
			record.status &&
			record.color.substring(0,1) !== last_move_color
			) {
			const piece = InstanceController.instancePiece(record);

			const pieces = await this.getPieces();
			const board = this.getBoard(pieces);

			if(piece.validateMove(new_position, board)) {
				this.killPiece(new_position);
				await ChessPiece.findOneAndUpdate({position: position},{position: new_position})
				return ''+ position + ' has been moved to ' + new_position;
			}	
		}
		return 'unchanged';
	}

}

const pieceController = new PieceController();
export default pieceController;