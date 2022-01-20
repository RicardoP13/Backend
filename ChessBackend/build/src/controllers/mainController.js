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
const gameController_1 = __importDefault(require("./gameController"));
const pieceController_1 = __importDefault(require("./pieceController"));
class MainController {
    contructor() { }
    getTable() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield gameController_1.default.getTable();
        });
    }
    restartGame() {
        return __awaiter(this, void 0, void 0, function* () {
            const board = yield pieceController_1.default.restart();
            return yield gameController_1.default.restart(board);
        });
    }
    movePiece(position, new_position) {
        return __awaiter(this, void 0, void 0, function* () {
            const last_move_color = yield gameController_1.default.getLastMove();
            const piece_moved = yield pieceController_1.default.move(position, new_position, last_move_color);
            if (piece_moved !== 'unchanged') {
                const pieces = yield pieceController_1.default.getPieces();
                const board = pieceController_1.default.getBoard(pieces);
                const new_last_move_color = last_move_color === "B" ? "W" : "B";
                gameController_1.default.updateStatus(board, new_last_move_color);
            }
            return piece_moved;
        });
    }
}
const mainController = new MainController();
exports.default = mainController;
//# sourceMappingURL=mainController.js.map