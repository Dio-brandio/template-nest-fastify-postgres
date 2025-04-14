import {
  GENDER,
  PRONOUNS,
  SESSIONTYPE,
  THERAPISTIDCLASSIFICATION,
  THERAPISTROLE,
} from '@constants';
import { BaseQueryParamsDTO } from './common.dtos';

export interface CreateTheapistPricingDetail {
  id: string;
  isDiscoveryCall?: boolean;
  sessionType: SESSIONTYPE;
  sessionPriceForClient: number;
  humanCommision: number;
  humanEarning: number;
  therapistEarning: number;
}
export interface CreateTherapistDTO {
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: string;
  joiningDate: string;
  therapistRole: THERAPISTROLE;
  profilePicture?: string;
  uploadContract?: string;
  pricingDetails: CreateTheapistPricingDetail[];
  createdBy?: string;
  isDiscoveryCall?: boolean;
  therapistIdClassification: THERAPISTIDCLASSIFICATION;
}

export interface GetTherapistQueryParamsDTO extends BaseQueryParamsDTO {
  name?: string;
  therapistId?: string;
  status?: string;
  email?: string;
  id?: string;
  sessionThisMonth?: number;
  totalSessions?: number;
  penalty?: number;
  therapistType?: string;
}

export interface TherapistSessionParamsDTO extends BaseQueryParamsDTO {
  sessionId?: string;
  therapistId?: string;
  name?: string;
  therapistName?: string;
  clientName?: string;
  date?: string;
  userId?: string;
  time?: string;
  sessionCharges?: string;
  sessionType?: string;
  status?: string;
}

export interface TherapistInsightsDateFilter {
  fromDate?: string;
  toDate?: string;
  filter?: string;
}

export interface IGetTherapistTemplate {
  therapistName: string;
  link: string;
}
