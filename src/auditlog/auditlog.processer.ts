import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { AuditLog } from '@models';
import { getAuditMessage } from '@utils';
import { QUE_NAME } from '@constants';

@Processor(QUE_NAME.AUDIT_LOG)
@Injectable()
export class AuditLogProcessor extends WorkerHost {
  constructor(
    @InjectModel(AuditLog)
    private auditLog: typeof AuditLog,
  ) {
    super();
  }
  async process(job: Job): Promise<any> {
    try {
      const data = job.data;
      const { oldValues, newValues } = data;
      if (oldValues || newValues) {
        data.message = getAuditMessage({ oldValues, newValues });
      }
      const auditLog = await this.auditLog.create(data);
      return auditLog;
    } catch (error) {
      console.log(error);
    }
  }
}
