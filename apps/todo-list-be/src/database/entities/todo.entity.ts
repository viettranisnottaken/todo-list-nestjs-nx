import 'reflect-metadata';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, BaseEntity } from 'typeorm';
import { Collection } from './collection.entity';
import { User } from './user.entity';
import { EntityRelationalHelper } from './relational-entity-helper';

export enum ETodoStatus {
  TODO = 0,
  IN_PROGRESS = 1,
  DONE = 2,
}

@Entity({
  name: 'todo',
})
export class Todo extends EntityRelationalHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  label: string;

  @Column({ default: ETodoStatus.TODO })
  status: ETodoStatus;

  @Column({ default: false })
  isDeleted: boolean

  // @ManyToOne(() => Collection, (collection) => collection.todos)
  // collection: Collection

  // @ManyToOne(() => User, (user) => user.todos)
  // user: User
}
