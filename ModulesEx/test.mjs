import {getAvailableDoctors} from './University.mjs'
import assert from 'assert'

//let f = require('./University.mjs');
//let assert = require('assert');

async function test(){
	assert.ok(Array.isArray(await getAvailableDoctors()))
	
}

test();