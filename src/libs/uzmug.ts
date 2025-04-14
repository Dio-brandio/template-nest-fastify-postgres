import { Sequelize } from 'sequelize-typescript';
import { Dialect } from 'sequelize';
import { Umzug, SequelizeStorage } from 'umzug';
import { ENV } from '@config';

const dialect = ENV.DB.DIALECT as Dialect;
const host = ENV.DB.HOST;
const port = +ENV.DB.PORT;
const username = ENV.DB.USERNAME;
const password = ENV.DB.PASSWORD;
const database = ENV.DB.DATABASE;
const sequelize = new Sequelize({
  host,
  port,
  username,
  password,
  database,
  dialect,
});
export const uzmug = new Umzug({
  migrations: {
    glob: 'src/migrations/*.ts',
  },
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({ sequelize }),
  logger: console,
});

