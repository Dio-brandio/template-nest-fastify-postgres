import { SESSIONTYPE } from '@constants';
import { AuditFieldsDTO, BaseQueryParamsDTO } from './common.dtos';

export interface TherapistPricingDetailsDto extends AuditFieldsDTO {
  id: string;
  sessionType: SESSIONTYPE;
  priceForClient: number;
  userId: string;
  humannCommission: number;
  humannEarnings?: number;
  therapistEarning?: number;
}

export interface TherapistPricingDetailsFilterDto
  extends Partial<BaseQueryParamsDTO> {
  search?: string;
}
