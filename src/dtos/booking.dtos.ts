import { BOOKINGSTATUS } from '@constants';
import { BaseQueryParamsDTO } from './common.dtos';

export interface BookingDTO {
  userId: string;
  date: Date;
  isReschedule: boolean;
  status: BOOKINGSTATUS;
  therapistId: string;
  scheduleId: string;
  bookingId: string;
  scheduleSlotId?: string[];
  sessionType: string;
}

export interface UpdateBookingDTO {
  reasonForReshedule: string;
  newScheduleSlotId: string[];
  date: Date;
}

export interface BookingQueryParamsDTO extends BaseQueryParamsDTO {
  startDate?: string;
  endDate?: string;
  status?: string;
  sessionTime?: string;
  fromAge?: number;
  toAge?: number;
  gender?: string;
  clientType?: string;
  userId?: string;
  date?: string;
  time?: string;
  sessionType?: string;
  sessionStatus?: string;
  therapistName?: string;
}
