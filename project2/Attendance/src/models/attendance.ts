import {Schema, model} from 'mongoose';

const Attendance = new Schema({
	startTime: {type : Date, required: true},
	endTime: {type : Date, required: true},
	idUser: {type : String, required: true},
	notes: {type : String},
});

export default model('Attendance',Attendance)