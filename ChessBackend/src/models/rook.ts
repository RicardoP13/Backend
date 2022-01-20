import IPiece from './IPiece';

export default class Rook implements IPiece {
	constructor(
		public type: String, 
		public color: String, 
		public position: Array<number>,
		public status: boolean) {}
	
	validMoves(board: any) {
		const valid_moves = [];
		let x: number;
		let y: number;
		let next_box;
		const enemy_color = this.color === "White" ? "B" : "W";

		y = this.position[0];
		for(x = this.position[1]+1; x <= 7; x ++){
			next_box = board[y][x];
			if( next_box === 'o' || next_box.substring(0,1) === enemy_color ) {
				valid_moves.push([y,x]);
			}
			if(next_box.substring(0,1) !== 'o') {
				break;
			}
		}
		for(x = this.position[1]-1; x >= 0; x --){
			next_box = board[y][x];
			if( next_box === 'o' || next_box.substring(0,1) === enemy_color ) {
				valid_moves.push([y,x]);
			}
			if(next_box.substring(0,1) !== 'o') {
				break;
			}	
		}

		x = this.position[1];
		for(y = this.position[0]+1; y <= 7; y ++){
			next_box = board[y][x];

			if( next_box === 'o' || next_box.substring(0,1) === enemy_color ) {
				valid_moves.push([y,x]);
			}
			if(next_box.substring(0,1) !== 'o') {
				break;
			}
		}
		for(y = this.position[0]-1; y >= 0; y --){
			next_box = board[y][x];
			if( next_box === 'o' || next_box.substring(0,1) === enemy_color ) {
				valid_moves.push([y,x]);
			}
			if(next_box.substring(0,1) !== 'o') {
				break;
			}
		}

		return valid_moves;
	}

	validateMove(new_position: Array<number>, board: any) {
		const valid_moves = this.validMoves(board);

		if(valid_moves.length !== 0) {
			const valid_move = valid_moves.find(move => JSON.stringify(move) === JSON.stringify(new_position));
			return typeof valid_move !== 'undefined';
		}
		return false;
	}

}