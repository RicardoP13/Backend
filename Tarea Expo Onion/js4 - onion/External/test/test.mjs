import { expect } from "chai"
import { assert } from 'chai';

describe('my first test', function () {
    function hello(param) {
        return ('Hi ' + param + '!');
    }
    it('First test jane', () => {
        expect(assert.equal(hello('Jane'), 'Hi Jane!'));
    })
    it('First test john', () => {
        expect(assert.equal(hello('John'), 'Hi John!'));
    })
    it('First test Hi!', () => {
        expect(assert.equal(hello(''), 'Hi !'));
    })

})