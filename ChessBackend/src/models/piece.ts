import {Schema, model} from 'mongoose';

const ChessPiece = new Schema({
	type: {type : String, required: true},
	position: {type : Array, required: true},
	initial_position: {type : Array, required: true},
	color: {type : String, required: true},
	status: {type : Boolean, default: true},
	valid_moves: {type: Array}
});

export default model('Piece',ChessPiece)