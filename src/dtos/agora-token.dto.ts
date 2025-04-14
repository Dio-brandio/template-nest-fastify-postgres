import { AuditFieldsDTO } from './common.dtos';

export interface GenerateTokenDto extends AuditFieldsDTO {
  channelName?: string;
  expireTimeInSeconds?: number;
  therapistId: string;
  userId: string;
  bookingId: string;
  createdBy?: string;
}
