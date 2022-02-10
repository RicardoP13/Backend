import { getRepository, ObjectType } from 'typeorm';

export default class Repository<TDomainEntity> {
  constructor(private entityType: ObjectType<TDomainEntity>) {}

  async findAllSimple() {
    const data = await getRepository(this.entityType).find();
    return data;
  }

  async filterAll(conditions: any) {
    const data = await getRepository(this.entityType).find({where : conditions});
    return data; 
  }

  async findById(id: any) {
    const records = await getRepository(this.entityType).find({ where: {id: id} });
    return records[0];
  }

  async save(entity: TDomainEntity) {
    const record = await getRepository(this.entityType).save(entity);
    return record;
  }

  async delete(id: any){
    const data = await getRepository(this.entityType).delete(id);
    return data.affected;
  }

}