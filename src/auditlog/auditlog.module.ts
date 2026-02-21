import { Module } from '@nestjs/common';
import { AuditlogService } from './auditlog.service';
import { BullModule } from '@nestjs/bullmq';
import { AuditLogProcessor } from './auditlog.processer';
import { QUE_NAME } from '@constants';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuditLog } from 'src/database/schemas/auditlog.schema';

@Module({
  imports: [
    BullModule.registerQueue({
      name: QUE_NAME.AUDIT_LOG,
    }),
    TypeOrmModule.forFeature([AuditLog]),
  ],
  providers: [AuditlogService, AuditLogProcessor],
  exports: [AuditlogService],
})
export class AuditlogModule {}
