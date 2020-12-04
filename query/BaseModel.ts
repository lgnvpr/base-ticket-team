import * as Joi  from "joi"

export class BaseModel {
    public  _id ?: string 
    public createBy ?: string;
    public createAt ?: Date ;
    public updateBy ?: string;
    public updateAt ?: Date;
    public status ?: Status;
    public adminId ?: string;
    public metaMapping?: any
}

export enum Status {
    active = "active",
    deleted = "deleted",
}

