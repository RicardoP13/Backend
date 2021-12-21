"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ChessPiece = new mongoose_1.Schema({
    type: { type: String, required: true },
    position: { type: Array, required: true },
    initial_position: { type: Array, required: true },
    color: { type: String, required: true },
    status: { type: Boolean, default: true },
    valid_moves: { type: Array }
});
exports.default = (0, mongoose_1.model)('Piece', ChessPiece);
//# sourceMappingURL=piece.js.map