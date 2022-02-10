"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const attendanceRepository_1 = __importDefault(require("../repository/attendanceRepository"));
const rabbitService_1 = __importDefault(require("../services/rabbitService"));
class AttendanceController {
    contructor() { }
    async getData(data) {
        const response = await attendanceRepository_1.default.getData(data);
        return response;
    }
    async saveData(data) {
        const response = await attendanceRepository_1.default.saveData(data);
        (0, rabbitService_1.default)(response);
        return response;
    }
    async deleteData(data) {
        const response = await attendanceRepository_1.default.deleteData(data);
        (0, rabbitService_1.default)(response);
        return response;
    }
}
const attendanceController = new AttendanceController();
exports.default = attendanceController;
//# sourceMappingURL=attendanceController.js.map