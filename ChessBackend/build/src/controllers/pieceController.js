"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const piece_1 = __importDefault(require("../models/piece"));
const boardGenerator_1 = __importDefault(require("./boardGenerator"));
const instanceController_1 = __importDefault(require("./instanceController"));
class PieceController {
    contructor() { }
    getPieces() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield piece_1.default.find();
        });
    }
    getPiece(position) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield piece_1.default.findOne({ position });
        });
    }
    getBoard(pieces) {
        return boardGenerator_1.default.generate(pieces);
    }
    killPiece(position) {
        return __awaiter(this, void 0, void 0, function* () {
            yield piece_1.default.findOneAndUpdate({ position: position }, { status: false });
        });
    }
    restart() {
        return __awaiter(this, void 0, void 0, function* () {
            //reiniciar todos las piezas
            const old_pieces = yield this.getPieces();
            old_pieces.forEach((piece) => __awaiter(this, void 0, void 0, function* () { return yield piece_1.default.findOneAndUpdate({ position: piece.position }, { position: piece.initial_position, status: true }); }));
            const new_pieces = yield this.getPieces();
            return boardGenerator_1.default.generate(new_pieces);
        });
    }
    move(position, new_position, last_move_color) {
        return __awaiter(this, void 0, void 0, function* () {
            const record = yield this.getPiece(position);
            if (!!record &&
                record.status &&
                record.color.substring(0, 1) !== last_move_color) {
                const piece = instanceController_1.default.instancePiece(record);
                const pieces = yield this.getPieces();
                const board = this.getBoard(pieces);
                if (piece.validateMove(new_position, board)) {
                    this.killPiece(new_position);
                    yield piece_1.default.findOneAndUpdate({ position: position }, { position: new_position });
                    return '' + position + ' has been moved to ' + new_position;
                }
            }
            return 'unchanged';
        });
    }
}
const pieceController = new PieceController();
exports.default = pieceController;
//# sourceMappingURL=pieceController.js.map