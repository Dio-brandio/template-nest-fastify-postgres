import { Module } from '@nestjs/common';

import { CronLogModule } from './cron-log/cron-log.module';

@Module({
  imports: [CronLogModule],
})
export class CronModule {}
