"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const configORM_1 = __importDefault(require("../config/configORM"));
class DatabaseConnection {
    constructor() {
        this.DB_USER = configORM_1.default.DB_USER;
        this.DB_PASSWORD = configORM_1.default.DB_PASSWORD;
        this.DB_HOST = configORM_1.default.DB_HOST;
        this.DB_PORT = configORM_1.default.DB_PORT;
        this.DB_TYPE = configORM_1.default.DB_TYPE;
        this.DB_NAME = configORM_1.default.DB_NAME;
        this.DB_ENTITIES = configORM_1.default.DB_ENTITIES;
        this.DB_SYNCRO = configORM_1.default.DB_SYNCRO;
        try {
            this.connection = (0, typeorm_1.createConnection)({
                type: 'mysql',
                host: this.DB_HOST,
                port: this.DB_PORT,
                username: this.DB_USER,
                password: this.DB_PASSWORD,
                database: this.DB_NAME,
                entities: this.DB_ENTITIES,
                synchronize: this.DB_SYNCRO
            });
        }
        catch (error) {
            throw new Error(`Unable to connect to the database: ${error}`);
        }
    }
    async testConnection() {
        try {
            console.log({
                type: 'mysql',
                host: this.DB_HOST,
                port: this.DB_PORT,
                username: this.DB_USER,
                password: this.DB_PASSWORD,
                database: this.DB_NAME,
                entities: this.DB_ENTITIES,
                synchronize: this.DB_SYNCRO
            });
            const testConnection = await (0, typeorm_1.createConnection)({
                type: 'mysql',
                host: this.DB_HOST,
                port: this.DB_PORT,
                username: this.DB_USER,
                password: this.DB_PASSWORD,
                database: this.DB_NAME,
                entities: this.DB_ENTITIES,
                synchronize: this.DB_SYNCRO
            });
            testConnection.close();
            return 'Test Connection has been established successfully.';
        }
        catch (error) {
            return `Unable to connect to the database: ${error}`;
        }
    }
}
exports.default = DatabaseConnection;
//# sourceMappingURL=databaseConnection.js.map