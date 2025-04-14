import { AuditFieldsDTO } from './common.dtos';

export interface ActionsDTO extends AuditFieldsDTO {
  isVisible: boolean;
  name: string;
  sequence: number;
}
export interface UpdateVisibilityDTO {
  data: [IUpdateVisibility];
}
export interface IUpdateVisibility {
  _id: string;
  isVisible: boolean;
}
