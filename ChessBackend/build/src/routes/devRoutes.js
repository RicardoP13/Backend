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
const piece_1 = __importDefault(require("../models/piece"));
class DevRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    getPieces(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const pieces = yield piece_1.default.find();
            response.json(pieces);
        });
    }
    del(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { color } = request.body;
            const table = yield piece_1.default.findOneAndDelete({ color });
            response.json(table);
        });
    }
    createPiece(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { type, position, color, status, valid_moves } = request.body;
            const newPiece = new piece_1.default({ type, position, color, status, valid_moves });
            yield newPiece.save();
            console.log(newPiece);
            response.json('recieved');
        });
    }
    updatepiece(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { position } = request.body;
            const piece = yield piece_1.default.findOneAndUpdate({ position }, { position: [0, 0] });
            const pieces = yield piece_1.default.find();
            response.json(pieces);
        });
    }
    routes() {
        this.router.get('/', this.getPieces);
        this.router.post('/', this.createPiece);
        this.router.delete('/', this.del);
        this.router.put('/', this.updatepiece);
    }
}
const devRoutes = new DevRoutes();
exports.default = devRoutes.router;
//# sourceMappingURL=devRoutes.js.map