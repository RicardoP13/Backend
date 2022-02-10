"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = __importDefault(require("./repository"));
class AttendanceRepository {
    constructor() { }
    async getData(data) {
        if (!data.id) {
            return await repository_1.default.findAll();
        }
        return await repository_1.default.filter({ idUser: data.id });
    }
    async saveData(data) {
        return await repository_1.default.save(data);
    }
    async deleteData(data) {
        return await repository_1.default.delete(data);
    }
}
const repository = new AttendanceRepository();
exports.default = repository;
//# sourceMappingURL=attendanceRepository.js.map