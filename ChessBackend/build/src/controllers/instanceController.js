"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pawn_1 = __importDefault(require("../models/pawn"));
const knight_1 = __importDefault(require("../models/knight"));
const rook_1 = __importDefault(require("../models/rook"));
const bishop_1 = __importDefault(require("../models/bishop"));
class InstanceController {
    constructor() { }
    instancePiece(piece) {
        switch (piece.type) {
            case 'knight':
                return new knight_1.default(piece.type, piece.color, piece.position, piece.status);
                break;
            case 'rook':
                return new rook_1.default(piece.type, piece.color, piece.position, piece.status);
                break;
            case 'bishop':
                return new bishop_1.default(piece.type, piece.color, piece.position, piece.status);
                break;
            default:
                return new pawn_1.default(piece.type, piece.color, piece.position, piece.status);
                break;
        }
    }
}
const instanceController = new InstanceController();
exports.default = instanceController;
//# sourceMappingURL=instanceController.js.map