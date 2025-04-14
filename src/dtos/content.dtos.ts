import { BaseQueryParamsDTO } from './common.dtos';

export interface ContentDTO {
  contentType: string;
  image: string;
  title: string;
  subText: string;
  isPublish: boolean;
  modality: string;
  linkUrl: string;
  description: string;
}

export interface ContentQueryParam extends BaseQueryParamsDTO {
  isPublished?: boolean;
  contentType?: string;
  title?: string;
  modality?: string;
}
