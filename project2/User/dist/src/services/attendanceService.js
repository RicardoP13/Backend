"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class AttendanceService {
    async getAttendances(userId) {
        return axios_1.default
            .get(`http://localhost:3000/attendance/?id=${userId}`)
            .then((res) => res.data.data)
            .catch((err) => console.log(err));
    }
}
const service = new AttendanceService();
exports.default = service;
//# sourceMappingURL=attendanceService.js.map