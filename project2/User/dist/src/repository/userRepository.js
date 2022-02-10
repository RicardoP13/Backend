"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_entity_1 = require("../entities/user.entity");
const repository_1 = __importDefault(require("./repository"));
const attendanceService_1 = __importDefault(require("../services/attendanceService"));
class UserRepository {
    constructor() {
        this.genericRepository = new repository_1.default(user_entity_1.User);
    }
    async getDataSimple() {
        return await this.genericRepository.findAllSimple();
    }
    async filterData(data) {
        return await this.genericRepository.filterAll([
            {
                nickname: data.nickname
            },
            {
                name: data.name
            }
        ]);
    }
    async saveData(data) {
        const userRecord = await user_entity_1.User.create({
            nickname: data.nickname,
            name: data.name
        });
        return this.genericRepository.save(userRecord);
    }
    async deleteData(data) {
        return await this.genericRepository.delete(data.id);
    }
    async updateField(data) {
        const userRecord = await this.genericRepository.findById(data.id);
        userRecord.attendances = data.attendances;
        const updatedUser = await this.genericRepository.save(userRecord);
        return updatedUser;
    }
    async getRemoteData(data) {
        const user = await this.genericRepository.findById(data.id);
        const attendances = await attendanceService_1.default.getAttendances(data.id);
        const response = {
            ...user,
            listOfAttendances: attendances
        };
        return response;
    }
}
const repository = new UserRepository();
exports.default = repository;
//# sourceMappingURL=userRepository.js.map