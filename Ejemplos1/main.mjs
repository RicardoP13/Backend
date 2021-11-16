import { isTextFile } from "./file-tools.mjs";
//import assert from "assert";
import { assert } from "chai";
import Employee from "./Employee.mjs"

console.log(isTextFile('app.js'));

const empl = new Employee('nombre','titulo')

console.log(empl.describe())

//test mocha

const myArray = ['a','b','c','d'];
assert.equal(myArray.length,4);

const x = 5;
assert.equal(x,5);
//let y
{
	const y = 5;
	console.log(y);
	//const y = 5;
	const x = 12;
	assert.equal(x,12);
}
assert.equal(x,5);