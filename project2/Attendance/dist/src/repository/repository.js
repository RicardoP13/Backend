"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const attendance_1 = __importDefault(require("../models/attendance"));
class Repository {
    constructor() { }
    async findAll() {
        return await attendance_1.default.find();
    }
    async filter(conditions) {
        return await attendance_1.default.find(conditions);
    }
    async save(data) {
        const { startTime, endTime, idUser, notes } = data;
        const newAttendance = new attendance_1.default(data);
        await newAttendance.save();
        return newAttendance;
    }
    async delete(data) {
        return await attendance_1.default.findOneAndDelete({ _id: data.id });
    }
}
const repository = new Repository();
exports.default = repository;
//# sourceMappingURL=repository.js.map