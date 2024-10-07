import 'reflect-metadata';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, BaseEntity } from 'typeorm';
import { Todo } from './todo.entity';
import { Collection } from './collection.entity';
import { EntityRelationalHelper } from './relational-entity-helper';

@Entity({
  name: 'user',
})
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  age: number;

  @Column()
  phoneNumber: string;

  @Column({ default: false })
  isDeleted: boolean

  // @OneToMany(() => Todo, (todo) => todo.user, {
  //   eager: true,
  //   cascade: true,
  // })
  // todos: Todo[];

  // @OneToMany(() => Collection, (collection) => collection.user, {
  //   eager: true,
  //   cascade: true,
  // })
  // collections: Collection[];
}
