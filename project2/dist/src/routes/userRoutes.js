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
        this.router.get('/', this.getUsers);
        this.router.post('/', this.addUser);
    }
    async getUsers(request, response) {
        const data = await userController_1.default.getAData();
        response.json({
            status: 200,
            message: data
        });
    }
    async addUser(request, response) {
        const data = await userController_1.default.saveData(request.body);
        response.json({
            status: 200,
            message: data
        });
    }
}
const userRoutes = new UserRoutes();
exports.default = userRoutes.router;
//# sourceMappingURL=userRoutes.js.map