"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
class Repository {
    constructor(entityType) {
        this.entityType = entityType;
    }
    async findAllSimple() {
        const data = await (0, typeorm_1.getRepository)(this.entityType).find();
        return data;
    }
    async filterAll(conditions) {
        const data = await (0, typeorm_1.getRepository)(this.entityType).find({ where: conditions });
        return data;
    }
    async findById(id) {
        const records = await (0, typeorm_1.getRepository)(this.entityType).find({ where: { id: id } });
        return records[0];
    }
    async save(entity) {
        const record = await (0, typeorm_1.getRepository)(this.entityType).save(entity);
        return record;
    }
    async delete(id) {
        const data = await (0, typeorm_1.getRepository)(this.entityType).delete(id);
        return data.affected;
    }
}
exports.default = Repository;
//# sourceMappingURL=repository.js.map