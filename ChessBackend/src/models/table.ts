import {Schema, model} from 'mongoose';

const ChessTableSchema = new Schema({
	id: {type : String, required : true, unique: true },
	fields: {type : Array, required: true}
});

export default model('ChessTable',ChessTableSchema)