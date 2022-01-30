import { getRepository, ObjectType } from 'typeorm';

export default class Repository<TDomainEntity> {
  constructor(private entityType: ObjectType<TDomainEntity>) {}

  async findAll() {
    const data = await getRepository(this.entityType).find();
    return data;
  }

  async save(entity: TDomainEntity) {
    const record = getRepository(this.entityType).save(entity);
    return await record;
  }
}