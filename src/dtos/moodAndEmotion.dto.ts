import { AuditFieldsDTO, BaseQueryParamsDTO } from './common.dtos';

export interface MoodAndEmotionDTO extends AuditFieldsDTO {
  describeFeeling: Array<string>;
  biggestImage: Array<string>;
  logTime: Date | string;
  userId: string;
  moodOrEmotionType: string;
  logType: string;
  moodOrEmotionTypeValue?: number;
}

export interface MoodAndEmotionQueryParams extends BaseQueryParamsDTO {
  date?: string;
  logType?: string;
  month?: string;
  year?: string;
  startTime?: string;
  endTime?: string;
}
