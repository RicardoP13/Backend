"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MoveGenerator {
    constructor() { }
    generate(type, position, color, board) {
        let result = [];
        switch (type) {
            case 'test':
                result = [[0, 0]];
                break;
            default:
                result = this.testValidMoves(position);
                break;
        }
        return result;
    }
    testValidMoves(position) {
        const validmoves = [];
        for (let i = 0; i < 3; i++) {
            validmoves.push([i, -1]);
        }
        return validmoves;
    }
}
const moveGenerator = new MoveGenerator();
exports.default = moveGenerator;
//# sourceMappingURL=moveGenerator.js.map