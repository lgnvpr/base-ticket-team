import { BaseModel } from "../query/BaseModel";

export interface AccountRole extends BaseModel {
  roleId?: string;
  accountId?: string;
}
