export default class Person{

	constructor(name){
		this.name = name;
	}
	describe(){

		return `person named ${this.name}`
	}

}