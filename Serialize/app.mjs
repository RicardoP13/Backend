import { myStringify } from './toJSON.mjs'
import { myParse } from './toObject.mjs'

const obje ={
	p1: 'holin',
	p2: 43n,
	p3: {
		pp1:67n,
		pp3:{
			ppp:[23n]
		}
	},
	p4:[34,43n]
}

console.log('GIVEN OBJECT:');
console.log(obje);
console.log('\nSERIALIZED OBJECT:');
console.log(myStringify(obje));
console.log('\nDESRIALIZED JSON:');
console.log(myParse(myStringify(obje)));