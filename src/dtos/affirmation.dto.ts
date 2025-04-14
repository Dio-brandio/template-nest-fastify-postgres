import { AFFIRMATIONSTATUS, BACKGROUNDTRACKSTATUS } from '@constants';
import { AuditFieldsDTO, BaseQueryParamsDTO } from './common.dtos';

export interface AffirmationDTO {
  id?: string;
  imageUrl: string;
  affirmationDetails: string;
  status: AFFIRMATIONSTATUS;
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  createdBy: string;
  updatedBy?: string;
  deletedBy?: string;
}

export interface UpdateAffirmationDTO extends AuditFieldsDTO {
  imageUrl: string;
  affirmationDetails?: string;
  status?: AFFIRMATIONSTATUS;
}
export interface AffirmationPaging extends BaseQueryParamsDTO {
  isPublished?: boolean;
  userId?: string;
  status?: string;
}

export interface CreateSavedAffirmationDTO extends AuditFieldsDTO {
  affirmationId: string;
  userId?: string;
}

export interface GetSavedAffirmationQueryParamsDTO extends BaseQueryParamsDTO {
  userId?: string;
  affirmationId?: string;
  name?: string;
}
