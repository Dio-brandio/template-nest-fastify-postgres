import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';
import { Injectable } from '@nestjs/common';
import { getAuditMessage } from '@utils';
import { QUE_NAME } from '@constants';
import { InjectRepository } from '@nestjs/typeorm';
import { AuditLog } from 'src/database/schemas/auditlog.schema';
import { Repository } from 'typeorm';

@Processor(QUE_NAME.AUDIT_LOG)
@Injectable()
export class AuditLogProcessor extends WorkerHost {
  constructor(
    @InjectRepository(AuditLog)
    private auditLogRepo: Repository<AuditLog>,
  ) {
    super();
  }
  async process(job: Job) {
    const data = job.data;
    const { oldValues, newValues } = data;
    if (oldValues || newValues) {
      data.message = getAuditMessage({ oldValues, newValues });
    }
    const auditLog = this.auditLogRepo.create(data);
    return await this.auditLogRepo.save(auditLog);
  }
}
