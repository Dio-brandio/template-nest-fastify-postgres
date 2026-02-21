import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FastifyAuditPlugin, LoggerMiddleware } from '@middlewares';
import { AuditlogModule } from './auditlog/auditlog.module';
import { BullModule } from '@nestjs/bullmq';
import { ENV } from '@config';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    DatabaseModule,
    AuditlogModule,
    BullModule.forRoot({
      connection: {
        host: ENV.REDIS.HOST,
        port: ENV.REDIS.PORT,
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService, FastifyAuditPlugin, LoggerMiddleware],
})
export class AppModule {}
