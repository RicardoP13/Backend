import Rectangle from './rectangle';
import IRegularShape from './IRegularShape'

export default class Square implements IRegularShape {

    constructor(public width: number) {
    }

    calculateArea(): number {
        return this.width * this.width;
    }

}