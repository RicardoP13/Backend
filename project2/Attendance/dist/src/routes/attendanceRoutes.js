"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const attendanceController_1 = __importDefault(require("../controller/attendanceController"));
class AttendanceRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.get('/', this.getAttendances);
        this.router.post('/', this.addAttendance);
        this.router.delete('/', this.deleteAttendance);
    }
    async getAttendances(request, response) {
        const attendances = await attendanceController_1.default.getData(request.query);
        response.status(201).json({
            message: 'List made successfully',
            data: attendances
        });
    }
    async addAttendance(request, response) {
        const data = await attendanceController_1.default.saveData(request.body);
        response.status(201).json({
            message: 'attendance added successfully',
            data: data
        });
    }
    async deleteAttendance(request, response) {
        const data = await attendanceController_1.default.deleteData(request.body);
        response.status(201).json({
            message: 'attendance added successfully',
            data: data
        });
    }
}
const attendanceRoutes = new AttendanceRoutes();
exports.default = attendanceRoutes.router;
//# sourceMappingURL=attendanceRoutes.js.map