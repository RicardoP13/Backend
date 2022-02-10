"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Attendance = new mongoose_1.Schema({
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    idUser: { type: String, required: true },
    notes: { type: String },
});
exports.default = (0, mongoose_1.model)('Attendance', Attendance);
//# sourceMappingURL=attendance.js.map