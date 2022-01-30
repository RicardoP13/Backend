"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
class Repository {
    constructor(entityType) {
        this.entityType = entityType;
    }
    async findAll() {
        const data = await (0, typeorm_1.getRepository)(this.entityType).find();
        return data;
    }
    async save(entity) {
        const record = (0, typeorm_1.getRepository)(this.entityType).save(entity);
        return await record;
    }
}
exports.default = Repository;
//# sourceMappingURL=repository.js.map