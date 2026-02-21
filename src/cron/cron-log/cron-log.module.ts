import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CronLog } from 'src/database/schemas';

import { CronLogController } from './cron-log.controller';
import { CronLogService } from './cron-log.service';

@Module({
  imports: [TypeOrmModule.forFeature([CronLog])],
  controllers: [CronLogController],
  providers: [CronLogService],
  exports: [CronLogService],
})
export class CronLogModule {}
