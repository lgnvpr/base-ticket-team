import { BaseModel } from "../query/BaseModel";
import { Car } from "./Car";
import { Route } from "./Route";
import { Staff } from "./Staff";

export interface Trip extends BaseModel {
    timeStart ?: Date;
    CarId ?: string;
    Car ?: Car ;
    driveId ?: string; //là nhân viên
    RouteId ?:string;
    price : number;
    metaMapping ?: {
        driver ?: Staff;
        Route ?: Route;
    }
}