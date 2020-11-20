import { BaseModel } from "../query/BaseModel";
import { Car } from "./Car";
import { Route } from "./Route";
import { Staff } from "./Staff";
import { Trip } from "./Trip";

export interface DetailTrip extends BaseModel {
    staffId : string;
    tripId : string;
    metaMapping ?: {
        trip  ?: Trip;
        staff ?: Staff;
    }
}