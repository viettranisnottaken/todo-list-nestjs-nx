import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddCollections1726755048943 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO collections (id, label, is_deleted)
      VALUES (1, 'My Collection', false)
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`TRUNCATE TABLE collections;`);
  }
}
