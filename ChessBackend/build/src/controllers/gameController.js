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
const game_1 = __importDefault(require("../models/game"));
class GameController {
    contructor() { }
    getTable() {
        return __awaiter(this, void 0, void 0, function* () {
            const game = yield game_1.default.find();
            return game[0];
        });
    }
    getLastMove() {
        return __awaiter(this, void 0, void 0, function* () {
            const game = yield this.getTable();
            return game.last_move_color;
        });
    }
    restart(board) {
        return __awaiter(this, void 0, void 0, function* () {
            yield game_1.default.findOneAndUpdate({}, { last_move_color: 'B', board: board });
            return yield this.getTable();
        });
    }
    updateStatus(board, last_move_color) {
        return __awaiter(this, void 0, void 0, function* () {
            yield game_1.default.findOneAndUpdate({}, { last_move_color: last_move_color, board: board });
        });
    }
}
const gameController = new GameController();
exports.default = gameController;
//# sourceMappingURL=gameController.js.map