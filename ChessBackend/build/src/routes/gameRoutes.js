"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const table_1 = __importDefault(require("../models/table"));
class GameRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    getTable(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const table = yield table_1.default.find();
            response.json(table);
        });
    }
    //DEVELOPING FUNCTIONS
    createTable(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, fields } = request.body;
            const newTable = new table_1.default({ id, fields });
            yield newTable.save();
            console.log(newTable);
            response.json('recieved');
        });
    }
    del(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, fields } = request.body;
            const table = yield table_1.default.findOneAndDelete({ id });
            response.json('deleted');
        });
    }
    routes() {
        this.router.get('/game', this.getTable);
        //DEV ROUTES
        this.router.post('/game', this.createTable);
        this.router.delete('/game', this.del);
    }
}
const gameRoutes = new GameRoutes();
exports.default = gameRoutes.router;
//# sourceMappingURL=gameRoutes.js.map