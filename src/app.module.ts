import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DBModule } from './db/db.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '@models';
import { AuthModule } from './auth/auth.module';
import { LoggerMiddleware } from '@middlewares';
import { AuditlogModule } from './auditlog/auditlog.module';

@Module({
  imports: [DBModule, SequelizeModule.forFeature([User]), AuthModule, AuditlogModule],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule {
  async configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
