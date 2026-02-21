// cron-base.service.ts
import { Logger, OnApplicationBootstrap } from '@nestjs/common';
import { SchedulerRegistry } from '@nestjs/schedule';

import { CronJob } from 'cron';
import { CronStatus } from 'src/constants/cron.constant';

import { CronLogService } from './cron-log.service';

export abstract class CronBaseService implements OnApplicationBootstrap {
  private logger: Logger;
  constructor(
    protected readonly cronLogger: CronLogService,
    protected readonly schedulerRegistry: SchedulerRegistry,
  ) {}

  abstract getName(): string;
  abstract getSchedule(): string;
  abstract handle(): Promise<any>;

  onApplicationBootstrap() {
    const jobName = this.getName();
    const schedule = this.getSchedule();
    this.logger = new Logger(`CronJob:${jobName}`);

    const cronJob = new CronJob(schedule, async () => {
      const start = Date.now();
      const timestamp = new Date().toISOString();

      this.logger.log(` [${timestamp}] CRON START: ${jobName}`);

      try {
        await this.handle();
        const duration = Date.now() - start;

        this.logger.log(`CRON SUCCESS: ${jobName} (${duration}ms)`);

        await this.cronLogger.log(jobName, CronStatus.SUCCESS, null);
      } catch (err: any) {
        const duration = Date.now() - start;

        this.logger.error(
          ` CRON ERROR: ${jobName} (${duration}ms) — ${err.message}`,
        );

        await this.cronLogger.log(jobName, CronStatus.FAILURE, {
          message: err.message,
          error: err,
        });
      }
    });

    this.schedulerRegistry.addCronJob(jobName, cronJob);
    cronJob.start();

    this.logger.log(`⚙️ Registered cron: "${jobName}" → (${schedule})`);
  }
}
