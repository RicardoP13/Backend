"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userRepository_1 = __importDefault(require("../repository/userRepository"));
class UserController {
    contructor() { }
    async getDataSimple() {
        const response = await userRepository_1.default.getDataSimple();
        return response;
    }
    async filterData(data) {
        const response = await userRepository_1.default.filterData(data);
        return response;
    }
    async saveData(data) {
        const response = await userRepository_1.default.saveData(data);
        return response;
    }
    async deleteData(data) {
        const response = await userRepository_1.default.deleteData(data);
        return response;
    }
    async updateField(data) {
        const response = await userRepository_1.default.updateField(data);
        return response;
    }
    async getRemoteData(data) {
        const response = await userRepository_1.default.getRemoteData(data);
        return response;
    }
}
const userController = new UserController();
exports.default = userController;
//# sourceMappingURL=userController.js.map