import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddUsers1726755040476 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO users (id, first_name, last_name, email, age, phone_number, is_deleted)
      VALUES
        (1, 'Viet', 'Tran', 'tranxuanviet@gmail.com', '27', '123456789', false),
        (2, 'Com', 'Tran', 'comtran@gmail.com', '1', '123456788', false),
        (3, 'Hong Anh', 'Nguyen', 'honganh@gmail.com', '27', '123456787', false),
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`TRUNCATE TABLE users;`);
  }
}
