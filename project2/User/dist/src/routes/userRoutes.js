"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const databaseConnection_1 = __importDefault(require("../shared/databaseConnection"));
const userController_1 = __importDefault(require("../controller/userController"));
class UserRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
        this.connection = new databaseConnection_1.default();
    }
    routes() {
        this.router.get('/', this.getUsersSimple);
        this.router.post('/', this.addUser);
        this.router.patch('/', this.updateUserAttendances);
        this.router.delete('/', this.deleteUser);
        this.router.get('/attendance', this.getUserAttendances);
    }
    async getUsersSimple(request, response) {
        let data;
        try {
            if (!!request.query.nickname || !!request.query.name) {
                data = await userController_1.default.filterData(request.query);
            }
            else {
                data = await userController_1.default.getDataSimple();
                if (data.length < 1) {
                    throw "No records in database";
                }
            }
            response.status(200).json({
                message: 'Users finded successfully',
                data: data
            });
        }
        catch (error) {
            response.status(400).json({
                message: error
            });
        }
    }
    async addUser(request, response) {
        try {
            if (!request.body.nickname || !request.body.name) {
                throw "Please send all required fields";
            }
            const user = await userController_1.default.saveData(request.body);
            response.status(201).json({
                message: 'User created successfully',
                data: user
            });
        }
        catch (error) {
            response.status(400).json({
                message: error
            });
        }
    }
    async deleteUser(request, response) {
        const data = await userController_1.default.deleteData(request.body);
        if (data > 0) {
            response.status(200).json({
                message: 'User deleted successfully'
            });
        }
        else {
            response.status(404).json({
                message: 'User not found'
            });
        }
    }
    async updateUserAttendances(request, response) {
        try {
            const data = await userController_1.default.updateField(request.body);
            response.status(200).json({
                message: 'User updated successfully',
                data: data
            });
        }
        catch (error) {
            response.status(400).json({
                message: error
            });
        }
    }
    async getUserAttendances(request, response) {
        const data = await userController_1.default.getRemoteData(request.query);
        response.status(200).json({
            message: 'User found successfully',
            data: data
        });
    }
}
const userRoutes = new UserRoutes();
exports.default = userRoutes.router;
//# sourceMappingURL=userRoutes.js.map