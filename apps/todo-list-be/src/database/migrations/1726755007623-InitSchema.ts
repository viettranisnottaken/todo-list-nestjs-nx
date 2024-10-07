import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitSchema1726755007623 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE "users" (
          "id" SERIAL PRIMARY KEY,
          "first_name" VARCHAR NOT NULL,
          "last_name" VARCHAR NOT NULL,
          "email" VARCHAR NOT NULL UNIQUE,
          "age" INT NOT NULL,
          "phoneNumber" VARCHAR NOT NULL,
          "isDeleted" BOOLEAN DEFAULT false
        );
      `);

    await queryRunner.query(`
      CREATE TABLE "todos" (
        "id" SERIAL PRIMARY KEY,
        "label" VARCHAR NOT NULL,
        "status" VARCHAR NOT NULL DEFAULT 'TODO',
        "is_deleted" BOOLEAN DEFAULT false,
        "user_id" INT,
        "collection_id" INT,
        CONSTRAINT "FK_user_todo" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE,
        CONSTRAINT "FK_collection_todo" FOREIGN KEY ("collectionId") REFERENCES "collection"("id") ON DELETE SET NULL
      );
    `);

    await queryRunner.query(`
        CREATE TABLE "collections" (
          "id" SERIAL PRIMARY KEY,
          "label" VARCHAR NOT NULL,
          "is_deleted" BOOLEAN DEFAULT false
          "user_id" INT,
          CONSTRAINT "FK_user_todo" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE,
        );
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "users"`);
    await queryRunner.query(`DROP TABLE "todos"`);
    await queryRunner.query(`DROP TABLE "collections"`);
  }
}
