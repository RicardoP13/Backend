"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const databaseConnection_1 = __importDefault(require("../shared/databaseConnection"));
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
        response.json({
            status: 200,
            message: 'list of Users'
        });
    }
    async addUser(request, response) {
        response.json({
            status: 200,
            message: 'user added'
        });
    }
}
const userRoutes = new UserRoutes();
exports.default = userRoutes.router;
//# sourceMappingURL=userRoutes.js.map