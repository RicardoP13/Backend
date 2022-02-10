import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nickname: string;

  @Column()
  name: string;

  @Column({default : 0})
  attendances: number;
}
