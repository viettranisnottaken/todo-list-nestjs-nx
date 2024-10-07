import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { config as devConfig } from 'dotenv';
import { config } from './database/data-source';

// devConfig({ path: '.env.development' });

// eslint-disable-next-line @typescript-eslint/no-var-requires
// const fs = require('node:fs');

// fs.readFile('.env.development', 'utf8', (err: any, data: any) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [() => config],
      // envFilePath: __dirname + '/../.env.development',
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => (configService.get('typeorm')) as any,
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
