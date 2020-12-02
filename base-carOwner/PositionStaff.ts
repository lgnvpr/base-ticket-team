import {BaseModel} from "../query/BaseModel";
export interface PositionStaff extends BaseModel{
    name ?:string | PositionDefault;
    description?: string;
    keyDefault ?: PositionDefault;
    metaMapping ?: {
        
    }
}

export enum PositionDefault {
    drive = "DRIVER",
    staffSale = "STAFF-SALE"
}