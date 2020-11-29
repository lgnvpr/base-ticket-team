import { BaseModel } from "../query/BaseModel";

export interface Trip extends BaseModel{
    price?: number,
    driveId?: string,
    RouteId?: string,
    timeStart?: Date,
    CarId?: string,
}