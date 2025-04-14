import { BaseQueryParamsDTO } from './common.dtos';

export interface FeedBackDTO {
  bookingId: string;
  empathetic: string;
  nonJudgmental: string;
  trustworthy: string;
  engagedListener: string;
  ethical: string;
  approachable: string;
  additionalComment: string;
}

export interface FeedBackQueryParams extends BaseQueryParamsDTO {
  feedbackKey?: string;
}
