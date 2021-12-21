import {Request,Response,Router} from 'express';

class MoveValidator{
	constructor(){}

	generateValidMoves(type:String,position: Array<number>){
		let result:Array<any> = []
		switch(type){
			case 'test':
				result = [[0,0]];
				break;
			default:
				result = this.testValidMoves(position);
				break
		}
		return result
	}
	testValidMoves(position: Array<number>){
		const validmoves:Array<any> = [];
		for(let i = 1; i < 3; i++){
			validmoves.push([i,-1]);
		}
		return validmoves
	}
}

const moveValidator = new MoveValidator();
export default moveValidator;