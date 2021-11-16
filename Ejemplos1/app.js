let assert = require('assert')

const x = 8;


let y;

y = 3 * 5;


//numbers

let myNumber = 50;
myNumber = 1.141;
myNumber = -55


//strings

let myString = 'abc';
myString = "abc";
myString = `String interpolation: ${256} ${myString}`;

console.log('Hello');
console.warn('Warning');
console.error('Something went wrong!');


//objects

const myObject = {
	first: 'jane',
	last: 'doe',
	getFullName() {
		return this.first + ' ' + this.last
	}
};

myObject.last = 'Modified Last Name';

console.log(myObject.getFullName());


//arrays

const myArray = ['a','b','c','d'];

assert.equal(myArray.length,4)