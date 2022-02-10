"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("./config/config"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const attendanceRoutes_1 = __importDefault(require("./routes/attendanceRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.route();
    }
    config() {
        const MONGO_URI = config_1.default.DB_TYPE + '://' + config_1.default.DB_HOST + ':' + config_1.default.DB_PORT + '/' + config_1.default.DB_NAME;
        mongoose_1.default.connect(MONGO_URI, {}).then(db => console.log('db is connected'));
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(express_1.default.json());
    }
    route() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/attendance', attendanceRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'));
        console.log('server on port', this.app.get('port'));
    }
}
const server = new Server();
server.start();
//# sourceMappingURL=server.js.map