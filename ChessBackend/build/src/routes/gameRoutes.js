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
const game_1 = __importDefault(require("../models/game"));
const mainController_1 = __importDefault(require("../controllers/mainController"));
class GameRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    getTable(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            response.json(yield mainController_1.default.getTable());
        });
    }
    postGame(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            response.json(yield mainController_1.default.restartGame());
        });
    }
    putPiece(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { position, new_position } = request.body;
            response.json(yield mainController_1.default.movePiece(position, new_position));
        });
    }
    del(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, fields } = request.body;
            const table = yield game_1.default.findOneAndDelete({ id });
            response.json('deleted');
        });
    }
    routes() {
        this.router.get('/', this.getTable); //List
        this.router.post('/', this.postGame); //restart
        this.router.put('/', this.putPiece); //move
    }
}
const gameRoutes = new GameRoutes();
exports.default = gameRoutes.router;
//# sourceMappingURL=gameRoutes.js.map