import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CronStatus } from 'src/constants/cron.constant';
import { CronLog } from 'src/database/schemas';
import { Repository } from 'typeorm';

@Injectable()
export class CronLogService {
  constructor(
    @InjectRepository(CronLog)
    private readonly cronLogRepository: Repository<CronLog>,
  ) {}
  async log(cronName: string, status: CronStatus, error: any) {
    const cronLog = this.cronLogRepository.create({
      cronName,
      status,
      error,
    });
    return await this.cronLogRepository.save(cronLog);
  }
}
