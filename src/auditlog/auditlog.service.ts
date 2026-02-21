import { QUE_NAME } from '@constants';
import { InjectQueue } from '@nestjs/bullmq';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bullmq';
import { AuditLog } from 'src/database/schemas/auditlog.schema';
import { DeepPartial } from 'typeorm';

@Injectable()
export class AuditlogService {
  constructor(@InjectQueue(QUE_NAME.AUDIT_LOG) private queue: Queue) {}

  async createLog(data: DeepPartial<AuditLog> | DeepPartial<AuditLog>[]) {
    await this.queue.add('create-log', data, {
      removeOnComplete: true,
      attempts: 3,
    });
  }
}
