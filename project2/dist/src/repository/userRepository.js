"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_entity_1 = require("../entities/user.entity");
const repository_1 = __importDefault(require("./repository"));
class UserRepository {
    constructor() {
        this.genericRepository = new repository_1.default(user_entity_1.User);
    }
    async getData() {
        return await this.genericRepository.findAll();
    }
    async saveData(data) {
        const userRecord = await user_entity_1.User.create({
            nickname: data.nickname,
            first_name: data.first_name,
            last_name: data.last_name,
            value: data.value
        });
        return this.genericRepository.save(userRecord);
    }
}
const repository = new UserRepository();
exports.default = repository;
//# sourceMappingURL=userRepository.js.map