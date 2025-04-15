import { AuditLog } from '@models';
import { InjectQueue } from '@nestjs/bullmq';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bullmq';
import { Optional } from 'sequelize';
import { NullishPropertiesOf } from 'sequelize/types/utils';

@Injectable()
export class AuditlogService {
  constructor(@InjectQueue('audit-log') private queue: Queue) {}

  async createLog(data: Optional<AuditLog, NullishPropertiesOf<AuditLog>>) {
    await this.queue.add('create-log', data, {
      removeOnComplete: true,
      attempts: 3,
    });
  }
}
