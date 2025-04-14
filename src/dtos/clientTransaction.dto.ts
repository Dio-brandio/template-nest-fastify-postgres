import { BaseQueryParamsDTO } from './common.dtos';

export interface GetCLientTransactionQueryParamsDTO extends BaseQueryParamsDTO {
  transactionId: string;
  id: string;
  status: string;
  amount: string;
  clientName: string;
  from: string;
  to: string;
  clientIds: string;
}
