"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userRepository_1 = __importDefault(require("../repository/userRepository"));
class UserController {
    contructor() { }
    async getAData() {
        const response = await userRepository_1.default.getData();
        return response;
    }
    async saveData(data) {
        const response = await userRepository_1.default.saveData(data);
        return response;
    }
}
const userController = new UserController();
exports.default = userController;
//# sourceMappingURL=userController.js.map