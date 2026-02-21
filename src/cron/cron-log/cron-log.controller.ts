import { Controller } from '@nestjs/common';

import { CronLogService } from './cron-log.service';

@Controller('cron-log')
export class CronLogController {
  constructor(private readonly cronLogService: CronLogService) {}
}
