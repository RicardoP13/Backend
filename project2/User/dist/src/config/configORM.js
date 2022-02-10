"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
exports.default = {
    API_PORT: 3000,
    DB_NAME: 'backendDB',
    DB_USER: 'root',
    DB_PASSWORD: 'secret',
    DB_HOST: 'localhost',
    DB_PORT: 3306,
    DB_TYPE: 'mysql',
    DB_ENTITIES: [path_1.default.join(__dirname, '../entities/*.entity.js')],
    DB_SYNCRO: true
};
//# sourceMappingURL=configORM.js.map