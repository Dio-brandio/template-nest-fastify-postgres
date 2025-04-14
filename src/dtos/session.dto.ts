import { SESSIONTYPE } from '@constants';
import { AuditFieldsDTO } from './common.dtos';

export interface SessionDTO extends AuditFieldsDTO {
  id: string;
  sessionId: string;
  therapistId: string;
  sessionType: SESSIONTYPE;
  isDiscoveryCall: boolean;
  timeSlotStart: string;
  timeSlotEnd?: string;
  sessionStartDate: Date;
  sessionEndDate: Date;
}
