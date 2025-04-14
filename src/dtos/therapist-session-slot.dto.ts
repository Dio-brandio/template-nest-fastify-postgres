import { Transaction } from 'sequelize';
import { BaseQueryParamsDTO } from './common.dtos';
import { SESSIONTYPE, SESSIONTYPEPREFERENCE } from '@constants';

export interface TimeSlotDTO {
  id?: string;
  day: string;
  slots: string[];
}

export interface SlotDeletionDTO {
  id: string;
  deleteSlots: string[];
}

export interface RemoveSessionSlotsDTO {
  timing: TimeSlotDTO[];
  therapistId: string;
  slotsToDelete?: SlotDeletionDTO[];
  skipBookedSession?: boolean;
  skipEachBookSession?: boolean;
}
export interface ITherapistSessionSlot {
  id: string;
  therapistId: string;
  weekDay: string;
  availableTime: string[];
  createdBy?: string;
  updatedBy?: string;
}

export interface specificDateSlot {
  id?: string;
  date: string;
  skipBookedSession?: boolean;
  updatedSlots: string[];
}

export interface UpdateDateScheduleDto {
  specificDateSlot: specificDateSlot[];
  skipEachBookSession?: boolean;
  skipBooked?: boolean;
}

export interface ITherapistSchedule {
  id?: string;
  therapistId: string;
  therapistSessionId: string;
  weekDay: string;
  scheduleTime: string;
  date: Date;
  createdBy?: string;
  updatedBy?: string;
  isSpecificUpdate?: boolean;
}

export interface ITherapistScheduleSlot {
  id: string;
  scheduleId: string;
  startTime: string;
  endTime: string;
  therapistId: string;
  isBooked: boolean;
  createdBy: string;
  updatedBy: string;
}

export interface IDeleteRequest {
  scheduleId?: string[];
  skipBookedSession?: boolean;
}
export interface slotsToDelete {
  id: string;
  deleteSlots: string[];
}

export interface GetTherapistSheduleSlotsQueryParams
  extends BaseQueryParamsDTO {
  therapistId: string;
  date?: string;
  fromDate?: Date;
  toDate?: Date;
}

export interface IGetSessionSlotQuery {
  date: string;
  therapistId: string;
  sessionType: SESSIONTYPE;
  therapyType: SESSIONTYPEPREFERENCE;
}

export interface IGetTherapistPriceQuery {
  isDiscoveyCall: boolean;
  sessionType: SESSIONTYPE;
  therapistId: string;
}

export interface slotToDelete {
  id: string;
  deleteSlots: string[];
}
export interface SlotsToRemove {
  therapistId: string;
  slotsToDelete: slotToDelete[];
  skipBookedSession: boolean;
}

export interface ICheckTherapistAvailability {
  fromDate?: string;
  toDate?: string;
  therapistId?: string;
}
