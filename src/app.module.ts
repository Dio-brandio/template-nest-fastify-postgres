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
import { REDIS_CONNECTION } from './redis/redis.module';

@Module({
  imports: [
    DBModule,
    SequelizeModule.forFeature([User]),
    AuthModule,
    AuditlogModule,
    BullModule.forRoot({
      connection: {
        ...REDIS_CONNECTION,
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService, FastifyAuditPlugin, LoggerMiddleware],
})
export class AppModule {}
