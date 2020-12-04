import { BaseModel } from "../query/BaseModel";
import { Car } from "./Car";
import { Route } from "./Route";
import { Staff } from "./Staff";

export interface Trip extends BaseModel{
    price?: number,
    driveId?: string,
    routeId?: string,
    timeStart?: Date,
    carId?: string,
    metaMapping?:{
        drive: Staff,
        route: Route,
        car : Car,
    }
}