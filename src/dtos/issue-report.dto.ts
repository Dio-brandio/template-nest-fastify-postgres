import { ISSUE_STATUS, ISSUETYPE } from '@constants';
import { AuditFieldsDTO, BaseQueryParamsDTO } from './common.dtos';

export interface IssueReportDTO extends AuditFieldsDTO {
  issueType: ISSUETYPE;
  userId?: string;
  therapistId?: string;
  specificIssue: string;
  bookingId?: string;
  message: string;
  status: ISSUE_STATUS;
  raisedByTherapist: boolean;
}

export interface IssueReportQueryParams extends BaseQueryParamsDTO {
  userId?: string;
  date?: string;
  search?: string;
  issueType?: string;
  name?: string;
  therapistId?: string;
}

export interface answerResolveIssues {
  isResolved: boolean;
  id: string;
  updatedBy?: string;
  answer?: string;
}
