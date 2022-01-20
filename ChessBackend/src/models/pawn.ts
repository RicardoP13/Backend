import IPiece from './IPiece';

export default class Pawn implements IPiece {
	constructor(
		public type: String, 
		public color: String, 
		public position: Array<number>,
		public status: boolean) {}
	
	validMoves(board: any) {
		const valid_moves = [];
		if(this.color === 'White') {
			if(this.position[0] < 7) {
				const next_box = board[this.position[0]+1] [this.position[1]];
				//if( next_box === 'o' || next_box.substring(0,1) === 'B') {
				if( next_box === 'o') {
					valid_moves.push([this.position[0]+1, this.position[1]]);
				}	
			}
			
		}
		else {
			if(this.position[0] > 0) {
				const next_box = board[this.position[0]-1][this.position[1]];
				if( next_box === 'o') {
					valid_moves.push([this.position[0]-1, this.position[1]]);
				}
			} 
		}
		return valid_moves;
	}

	validateMove(new_position: Array<number>, board: any) {
		const valid_moves = this.validMoves(board);
		if(valid_moves.length !== 0) {
			return JSON.stringify(new_position) === JSON.stringify(valid_moves[0]);
		}
		return false;
	}
}