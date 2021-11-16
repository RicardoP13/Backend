import { expect } from "chai"
import { assert } from "chai"
import { test } from "mocha"

function hello(name){
	return 'Hi '+name+"!"
}

describe("my first test", function() {
	it('should sum numbers', function(){
		expect(10 + 5).to.equal(15);
	})

	it('should sum numbers2', function(){
		expect(10 + 10).to.equal(20);
	})

	const numbers = [1,2,3,4,5];
	it('should array num', function(){
		assert.isArray(numbers,'is array of numbers');
	})

	it('should contains 2', function(){
		assert.include(numbers,2,'array contains 2');
	})
	
	it('should lenght 5', function(){
		assert.lengthOf(numbers,5,'array contains 5 elements');
	})

	test('first test', () => {
		assert.equal(hello('jane'),'Hi jane!')
		assert.equal(hello('John'),'Hi John!')
		assert.equal(hello(''),'Hi !')
	})

	
})