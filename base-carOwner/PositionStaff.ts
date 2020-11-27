import {BaseModel} from "../query/BaseModel";
export interface PositionStaff extends BaseModel{
    name ?:string;
    default ?: boolean;
    description?: string;
    metaMapping ?: {
        
    }
}