import { registerAs } from '@nestjs/config';
import 'reflect-metadata';
import { config as dotenvConfig } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';

dotenvConfig({ path: './apps/todo-list-be/.env.development' });

// eslint-disable-next-line @typescript-eslint/no-var-requires
// const fs = require('node:fs');

// fs.readFile('./apps/todo-list-be/src/database/migrations/1726755007623-InitSchema.ts', 'utf8', (err: any, data: any) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

console.log('env', __dirname);

export const config: DataSourceOptions = {
  type: 'postgres',
  host: `${process.env.DATABASE_HOST}`,
  port: parseInt((process.env.DATABASE_PORT ?? '5432'), 10) ,
  username: `${process.env.DATABASE_USERNAME}`,
  password: `${process.env.DATABASE_PASSWORD}`,
  database: `${process.env.DATABASE_NAME}`,
  entities: [__dirname + '/entities/*.entity{.ts,.js}'],
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
  migrationsTableName: 'todo-list',
  synchronize: false,
}

export default new DataSource(config)
