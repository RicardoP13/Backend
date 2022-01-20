import {Schema, model} from 'mongoose';

const ChessGame = new Schema({
	last_move_color:{type: String},
	board: {type: Array, required :true}

});

export default model('ChessGame',ChessGame)