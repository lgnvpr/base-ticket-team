import { BaseModel } from "../query/BaseModel";

export interface Permission extends BaseModel{
    method ?: MethodPermission;
    roleId ?: string;
}

export enum MethodPermission{
    post = "POST",
    get = "GET",
    delete = "DELETE"
}