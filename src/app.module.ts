import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DBModule } from './db/db.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '@models';
import { AuthModule } from './auth/auth.module';
import { FastifyAuditPlugin, LoggerMiddleware } from '@middlewares';
import { AuditlogModule } from './auditlog/auditlog.module';
import { BullModule } from '@nestjs/bullmq';

@Module({
  imports: [
    DBModule,
    SequelizeModule.forFeature([User]),
    AuthModule,
    AuditlogModule,
    BullModule.forRoot({
      connection: {
        host: 'localhost',
        port: 6379,
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService, FastifyAuditPlugin],
})
export class AppModule {
  async configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
