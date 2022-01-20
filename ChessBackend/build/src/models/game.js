"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ChessGame = new mongoose_1.Schema({
    last_move_color: { type: String },
    board: { type: Array, required: true }
});
exports.default = (0, mongoose_1.model)('ChessGame', ChessGame);
//# sourceMappingURL=game.js.map