import {BaseModel} from "../query/BaseModel";
export interface PostionStaff extends BaseModel{
    name :string;
    default : boolean;
    description?: string;
}