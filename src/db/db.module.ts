import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Dialect } from 'sequelize';
import * as alllModels from '../models/index';
import { ENV } from '@config';

const dialect = ENV.DB.DIALECT as Dialect;
const host = ENV.DB.HOST;
const port = +ENV.DB.PORT;
const username = ENV.DB.USERNAME;
const password = ENV.DB.PASSWORD;
const database = ENV.DB.DATABASE;

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect,
      host,
      port,
      username,
      password,
      database,
      // autoLoadModels: true,
      ssl: false,
      sync: {
        // alter: true,
        // force:true
      },
      dialectOptions: {
        keepAlive: true,
      },
      pool: {
        max: 20, // increase if you expect high load
        min: 0,
        acquire: 30000, // wait up to 30s to acquire a connection
        idle: 10000,
      },
      logging: process.env.NODE_ENV === 'dev',
      models: [alllModels.User],
    }),
  ],
})
export class DBModule {}
