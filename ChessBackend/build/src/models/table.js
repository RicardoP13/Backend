"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ChessTableSchema = new mongoose_1.Schema({
    id: { type: String, required: true, unique: true },
    fields: { type: Array, required: true }
});
exports.default = (0, mongoose_1.model)('ChessTable', ChessTableSchema);
//# sourceMappingURL=table.js.map