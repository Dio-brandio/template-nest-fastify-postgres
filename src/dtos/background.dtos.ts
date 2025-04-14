import { BACKGROUNDTRACKSTATUS } from '@constants';
import { AuditFieldsDTO, BaseQueryParamsDTO } from './common.dtos';

export interface BackgroundTrackDTO extends AuditFieldsDTO {
  trackUrl: string;
  trackStatus?: BACKGROUNDTRACKSTATUS;
  backgroundTrackFeature?: boolean;
}

export interface BackgroundTrackAffirmationDTO
  extends Partial<BaseQueryParamsDTO> {
  backgroundTrackId: string;
  trackUrl: string;
  trackStatus: BACKGROUNDTRACKSTATUS;
  backgroundTrackFeature: boolean;
}
