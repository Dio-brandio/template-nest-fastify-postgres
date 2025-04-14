import { AuditFieldsDTO, BaseQueryParamsDTO } from './common.dtos';

export interface AppContentDTO extends AuditFieldsDTO {
  contentType: string;
  contentText: string;
}

export interface AppContentParamsQuery extends BaseQueryParamsDTO {
  contentType?: string;
}
