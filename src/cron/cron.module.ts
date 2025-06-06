import { Module } from '@nestjs/common';
import { CronService } from './cron.service';
import { CronController } from './cron.controller';

@Module({
  controllers: [CronController],
  imports: [],
  providers: [CronService],
})
export class CronModule {}
