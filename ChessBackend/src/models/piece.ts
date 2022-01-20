import {Schema, model} from 'mongoose';

const ChessPiece = new Schema({
	type: {type : String, required: true},
	position: {type : Array, required: true},
	initial_position: {
		type : Array, 
		default: function(){
			const _this = this as any
			return _this.position
		}
	},
	color: {type : String, required: true},
	status: {type : Boolean, default: true},
	valid_moves: {type: Array},
	initial_valid_moves: {
		type: Array,
		default: function(){
			const _this = this as any
			return _this.valid_moves
		}
	}
});

export default model('Piece',ChessPiece)