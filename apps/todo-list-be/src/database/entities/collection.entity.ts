import 'reflect-metadata';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { Todo } from './todo.entity';
import { User } from './user.entity';
import { EntityRelationalHelper } from './relational-entity-helper';

@Entity({
  name: 'collection',
})
export class Collection extends EntityRelationalHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  label: string;

  @Column({ default: false })
  isDeleted: boolean

  // @OneToMany(() => Todo, (todo) => todo.collection, {
  //   eager: true,
  //   cascade: true,
  // })
  // todos: Todo[];

  // @ManyToOne(() => User, (user) => user.todos)
  // user: User
}
