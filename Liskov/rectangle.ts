import IRegularShape from './IRegularShape'

export default class Rectangle implements IRegularShape {

    constructor(public width: number, public length: number) {
    }

    calculateArea(): number {
        return this.width * this.length;
    }
} 