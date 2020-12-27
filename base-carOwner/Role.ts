import { BaseModel } from "../query/BaseModel";

export interface Role extends BaseModel {
    name : string;
    description : string;
}