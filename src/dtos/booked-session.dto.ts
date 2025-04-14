import { AuditFieldsDTO, BaseQueryParamsDTO } from './common.dtos';

export interface BookedSessionDTO extends AuditFieldsDTO {
  id: string;
  sessionId: string;
  clientId: string;
  isRescheduled: boolean;
  status: string;
  rescheduleDateTime?: Date;
  paymentId?: string;
  couponId?: string;
  couponDiscount?: number;
  totalAmount?: number;
  isRefund: boolean;
  refundAmount?: number;
  sessionCharges: number;
  therapistId?: string;
  reScheduledSessionId?: string;
  bookSessionId?: string;
  sessionDetailId?: string;
  reasonForReschedule?: string;
  rescheduleBy?: string;
  roleNameOfResherduler?: string;
}

export interface BookedSessionSearch extends Partial<BaseQueryParamsDTO> {
  search?: string;
  date?: string;
}
