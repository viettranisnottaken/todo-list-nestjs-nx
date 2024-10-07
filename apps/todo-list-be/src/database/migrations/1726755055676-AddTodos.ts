import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddTodos1726755055676 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO todos (id, label, status, is_deleted, user_id, collection_id)
      VALUES
        (1, 'Todo 1', 0, false, 1, 1),
        (2, 'Todo 2', 0, false, 1, 1),
        (3, 'Todo 3', 0, false, 1, null),
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`TRUNCATE TABLE todos;`);
  }
}
