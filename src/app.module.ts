import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DBModule } from './db/db.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '@models';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [DBModule, SequelizeModule.forFeature([User]), AuthModule],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule { }
