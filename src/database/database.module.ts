import { Global, Module } from '@nestjs/common';

import { DataSource } from 'typeorm';

import { ENV } from '../config/env';

const databaseProviders = [
  {
    provide: DataSource,
    useFactory: async () => {
      const dataSource = new DataSource({
        type: ENV.DB.TYPE as any,
        host: ENV.DB.HOST,
        port: ENV.DB.PORT,
        username: ENV.DB.USERNAME,
        password: ENV.DB.PASSWORD,
        database: ENV.DB.DATABASE,
        synchronize: false,
        logging: !ENV.isProd,
        entities: [__dirname + '/schemas/*.schema{.ts,.js}'],
        migrations: [__dirname + '/migrations/*{.ts,.js}'],
        pool: {
          max: 20,
          min: 5,
          idleTimeout: 30000,
        },
        ssl: ENV.DB.SSL,
      });
      return dataSource.initialize();
    },
  },
];

@Global()
@Module({
  imports: [],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
