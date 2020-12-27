import { BaseModel } from "../query/BaseModel";

export interface UserRole  extends BaseModel{ 
    userId ?: string;
    roleId ?:string;
}