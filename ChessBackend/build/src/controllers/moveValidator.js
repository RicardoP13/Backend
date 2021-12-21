"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MoveValidator {
    constructor() { }
    validate(type, position) {
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
        for (let i = 1; i < 3; i++) {
            validmoves.push([i, -1]);
        }
        return validmoves;
    }
}
const moveValidator = new MoveValidator();
exports.default = moveValidator;
//# sourceMappingURL=moveValidator.js.map