import Rectangle from "./rectangle";
import Square from './square';
import IRegularShape from "./IRegularShape";

const rectangle = new Square(6);
console.log(`Area : ${rectangle.calculateArea()}`);

const rectangle2 = new Rectangle(9,4);

test(rectangle);
test(rectangle2);

function test(rectangle: IRegularShape): void {
    if (rectangle.calculateArea() != 36)
        console.error("Bad area!");
}
