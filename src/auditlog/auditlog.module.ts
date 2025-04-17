import { Module } from '@nestjs/common';
import { AuditlogService } from './auditlog.service';
import { BullModule } from '@nestjs/bullmq';
import { AuditLogProcessor } from './auditlog.processer';
import { AuditLog } from '@models';
import { SequelizeModule } from '@nestjs/sequelize';
import { QUE_NAME } from '@constants';

@Module({
  imports: [
    BullModule.registerQueue({
      name: QUE_NAME.AUDIT_LOG,
    }),
    SequelizeModule.forFeature([AuditLog]),
  ],
  providers: [AuditlogService, AuditLogProcessor],
  exports: [AuditlogService],
})
export class AuditlogModule {}
