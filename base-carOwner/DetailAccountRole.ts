import { BaseModel } from "../query/BaseModel";

export interface DetailAccountRole extends BaseModel{
    accountId : string;
    roleId : string;
}