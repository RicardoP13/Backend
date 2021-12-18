import {Schema, model} from 'mongoose';

const ChessPiece = new Schema({
	type: {type : String, required: true},
	position: {type : Array, required: true}
	color: {type : String, required: true}
});

export default model('Piece',ChessPiece)