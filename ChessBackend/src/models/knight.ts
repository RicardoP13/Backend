import IPiece from './IPiece';

export default class Knight implements IPiece {
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

		if(this.position[1] < 7) {
			x = this.position[1]+1;
			if(this.position[0] < 6) {
				y = this.position[0]+2;
				next_box = board[y][x];
				if( next_box === 'o' || next_box.substring(0,1) === enemy_color ){
					valid_moves.push([y,x]);
				}
			}
			if(this.position[0] > 1) {
				y = this.position[0]-2;
				next_box = board[y][x];
				if( next_box === 'o' || next_box.substring(0,1) === enemy_color ){
					valid_moves.push([y,x]);
				}
			}

			if(this.position[1] < 6) {
				x = this.position[1]+2;
				if(this.position[0] < 7) {
					y = this.position[0]+1;
					next_box = board[y][x];
					if( next_box === 'o' || next_box.substring(0,1) === enemy_color ){
						valid_moves.push([y,x]);
					}
				}
				if(this.position[0] > 0) {
					y = this.position[0]-2;
					next_box = board[y][x];
					if( next_box === 'o' || next_box.substring(0,1) === enemy_color ){
						valid_moves.push([y,x]);
					}
				}
			}
		}
		if (this.position[1] > 0) {
			x = this.position[1]-1;
			if(this.position[0] < 6) {
				y = this.position[0]+2;
				next_box = board[y][x];
				if( next_box === 'o' || next_box.substring(0,1) === enemy_color ){
					valid_moves.push([y,x]);
				}
			}
			if(this.position[0] > 1) {
				y = this.position[0]-2;
				next_box = board[y][x];
				if( next_box === 'o' || next_box.substring(0,1) === enemy_color ){
					valid_moves.push([y,x]);
				}
			}

			if(this.position[1] > 1) {
				x = this.position[1]-2;
				if(this.position[0] < 7) {
					y = this.position[0]+1;
					next_box = board[y][x];
					if( next_box === 'o' || next_box.substring(0,1) === enemy_color ){
						valid_moves.push([y,x]);
					}
				}
				if(this.position[0] > 0) {
					y = this.position[0]-2;
					next_box = board[y][x];
					if( next_box === 'o' || next_box.substring(0,1) === enemy_color ){
						valid_moves.push([y,x]);
					}
				}
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