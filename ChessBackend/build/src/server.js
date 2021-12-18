"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const gameRoutes_1 = __importDefault(require("./routes/gameRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.route();
    }
    config() {
        const MONGO_URI = 'mongodb://localhost:27017/testDB';
        //mongoose.set('useFindAndModify',true);
        mongoose_1.default.connect(MONGO_URI, {
        /*useNewUrlParser: true,
        useCreateIndex: true
        */
        }).then(db => console.log('db is connected'));
        //Settings
        this.app.set('port', process.env.PORT || 3000);
        //Middlewares
        this.app.use(express_1.default.json());
    }
    route() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/api', gameRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'));
        console.log('server on port', this.app.get('port'));
    }
}
const server = new Server();
server.start();
//# sourceMappingURL=server.js.map