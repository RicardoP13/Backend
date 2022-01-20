import ChessGame from '../models/game';

class GameController{
	contructor(){}

	async getTable(){
		const game = await ChessGame.find();
		return game[0];
	}

	async getLastMove(){
		const game = await this.getTable();
		return game.last_move_color;	
	}
	
	async restart(board: Array<any>){
		await ChessGame.findOneAndUpdate({},{last_move_color: 'B',board: board});
		return await this.getTable();
	}

	async updateStatus(board: Array<any>, last_move_color: String) {
		await ChessGame.findOneAndUpdate({},{last_move_color: last_move_color,board: board});
	}

}

const gameController = new GameController();
export default gameController;